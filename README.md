# Stackathon - Winner of Developers Choice Award!

I built this project to analyze the relative positivity of news sources compared to other large news sources. I provided data for both center/unbiased, left leaning, right leaning, and conspiracy-grade sources.

I used the EventRegistry.org API to pull each news source's 50 most shared stories during the week June 4 - 8, 2018. I limited the news stories to political and other issues dealing with government, because of this, some sources had less than 50 stories during the time period. 

I then used Google's Cloud Natural Language sentiment analysis API to analyze the body of each article. The Google API returned to me the sentiment and emotional level of every sentence in each article, I then combined the sentence level sentiment into an average sentiment for each article.

### Video Presentation

Link here:

