'use strict';

const router = require('express').Router();
const fs = require('fs');

const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

const article = `"Voters recall the judge who imposed a short sentence on Brock Turner. Jeff Chiu/AP Looking for news you can trust? Subscribe to our free newsletters. Two years since former Stanford student Brock Turner was sentenced to just six months in jail for sexually assaulting an unconscious woman, voters in Santa Clara County, California, voted to recall the judge who sentenced him. Judge Aaron Persky of the Santa Clara County Superior Court will promptly be replaced by Cindy Hendrickson, an assistant district attorney who supported the recall effort. It is the first successful recall of a California judge since 1932. Early results on Tuesday night showed that 59 percent of voters opted to recall Persky, while 41 percent voted to keep the judge. "Tonight's results mirror what we heard while we were out talking to voters," Recall Persky campaign chair Michele Dauber said in a statement. "We are thankful for our supporters and every person who donated their time -- it truly made a difference." Retired judge LaDoris Cordell, a leader in the anti-recall effort, told KPIX on Tuesday night that the successful recall threatened judges' independence. "A good judge has lost his job for doing his job," Cordell said. "This does not bode well for the judiciary in California, and maybe for the rest of the country." In January 2015, Turner, a freshman from an affluent Ohio town, assaulted a young woman known as Emily Doe after meeting her at a fraternity party. He was caught and detained by passersby who spotted him on top of the unconscious young woman behind a dumpster. In March 2016, a jury convicted Turner of three felony counts, including assault with intent to commit rape of an intoxicated or unconscious person, penetration of an intoxicated person, and penetration of an unconscious person. Turner's case gained national attention after he his sentencing hearing on June 2, 2016, when BuzzFeed News published in full the powerful 7,000-word impact statement Doe read out loud to her attacker in court. "You took away my worth, my privacy, my energy, my time, my safety, my intimacy, my confidence, my own voice, until today," she said. "In newspapers my name was 'unconscious intoxicated woman', ten syllables, and nothing more than that. For a while, I believed that that was all I was. I had to force myself to relearn my real name, my identity. To relearn that this is not all that I am." In a statement, Turner largely blamed alcohol and "sexual promiscuity" for the assault, saying he never meant to hurt Doe: "I made a mistake, I drank too much, and my decisions hurt someone." Persky listened to both statements before following the recommendations of a probation officer's report and sentencing Turner to six months in county jail. In doing so, he made an exception to usual sentencing practices, citing the "severe impact" prison time would have on a 20-year-old with no significant criminal history. Under a California provision that provides offenders with one day of "good behavior" for each day served, Turner would be released in about three months. He was also required to register as a sex offender. Meanwhile, Doe's statement on BuzzFeed racked up more than 8 million views in four days, sparked protests at Stanford's commencement, and prompted Vice President Joe Biden to write an open letter in response. A backlash was brewing against Persky. Some prospective jurors scolded him in his courtroom. An online petition to remove the judge from the bench surpassed 1 million signatures in about a week. Dauber, a Stanford Law School professor, longtime sexual assault advocate, and family friend of the victim, launched a recall campaign and tasked a teaching assistant with digging up past Persky decisions that might demonstrate a pattern of bias against survivors of sexual assault. (Read more about Dauber in this nuanced profile by Julia Ioffe in Highline.) Complaints about Persky's choices in the Turner case and several others poured into the California Commission on Judicial Performance; its investigation did not find "clear and convincing" evidence that the decisions were the result of bias. The recall campaign ultimately raised more than $1 million and collected far more than the 58,634 signatures it needed to put Persky's name on the June 5 ballot. Tuesday's vote is a signal of growing intolerance for entrenched systems -- courts, Hollywood, human resources departments -- that allow perpetrators, especially privileged ones like Turner, off the hook for sexual violence. Soon after Persky handed down his sentence, Dauber told Mother Jones that the decision sent a message to survivors: "'You're on your own. Don't bother to call police or report.' And the message to potential perpetrators is: 'You don't have to take this stuff seriously. Don't worry, we have your back." It's also an indication of women's voting power. While the gender divide of the final vote is not known, a May 22 poll by a San Francisco TV station indicated a vast split between men and women on the recall effort. "If just men were voting, Persky would keep his job by 3 points," KPIX reported. "If only women voted, he would lose by 26 points." Opponents of the recall -- which included the bulk of the Santa Clara County legal community -- campaigned on a message of judicial independence, arguing that firing Persky would induce other judges to hand down harsher sentences. A week before Election Day, Persky broke his relative silence in an interview with CBS News, explaining that he was worried about the influence of social-media outrage on judges and jurors who believe an unpopular decision is the right one. "If a judge is thinking in the back of his or her mind, 'How is this going to look? How will it look on social media? Will I be vilified on cable news?' That's the wrong avenue," he said. The unusual public campaign against Persky likely has sent the message to other judges that, as the Brennan Center's deputy director for program management Alicia Bannon put it, "if we're not happy with your sentencing decisions, you could be next.'" Meanwhile, the Turner case has already led to harsher sentencing: A few months after Doe's statement went viral, California legislators passed a bill, signed by Gov. Jerry Brown, requiring prison time for anyone convicted of sexual penetration of an unconscious or intoxicated person -- which previously had not been mandatory. If he were considering Turner's case today, Persky could not hand down the same sentence. Yet when asked by CBS News if the rise of the #MeToo movement and the growing understanding of the effects of sexual assault on survivors would have changed his decision in the Turner case, Persky demurred. "Generally," he said, "the answer is absolutely not.""`;

router.get('/:source/google', async (req, res, next) => {
  // const { articles } = JSON.parse(
  //   fs.readFileSync(`../json/motherjones.json`, 'utf8')
  // );
  const document = {
    content: article,
    type: 'PLAIN_TEXT'
  };
  try {
    const sentiment = await client.analyzeSentiment({ document });
    res.json(sentiment);
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
