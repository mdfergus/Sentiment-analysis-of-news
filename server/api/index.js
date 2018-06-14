'use strict';

const router = require('express').Router();
const fs = require('fs');

const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

router.get('/:source/google', async (req, res, next) => {
  const articlesArr = [];

  const { articles } = await JSON.parse(
    fs.readFileSync(`./server/json/${req.params.source}.json`, 'utf8')
  );

  const title = articles.results[0].source.title;
  articles.results.forEach(ele => {
    const object = { title: ele.title, body: ele.body };
    articlesArr.push(object);
  });

  try {
    const analysis = [];
    for (let i = 0; i < articlesArr.length; i++) {
      const document = {
        content: articlesArr[i].body,
        type: 'PLAIN_TEXT'
      };
      const sentiment = await client.analyzeSentiment({ document });
      const magnitude =
        sentiment[0].documentSentiment.magnitude /
        sentiment[0].sentences.length *
        100;
      const emotion = sentiment[0].documentSentiment.score * 100;
      analysis.push({ title: articlesArr[i].title, magnitude, emotion });
    }
    const info = { title, analysis };

    res.json(info);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:source', (req, res, next) => {
  const { articles } = JSON.parse(
    fs.readFileSync(`../json/${req.params.source}.json`, 'utf8')
  );
  //console.log(articles)
  res.json(articles.results);
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
