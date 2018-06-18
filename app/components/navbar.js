import React from 'react';
import { Icon, SideNav, SideNavItem } from 'react-materialize';

export const navbar = () => {
  return (
    <div className="navbar">
      <SideNav
        trigger={
          <a>
            <Icon>more_vert</Icon>
          </a>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          edge="left"
          user={{
            background:
              'https://78.media.tumblr.com/6340c283ac76139b339828ae26eab365/tumblr_nnalyaDSle1qzwmsso1_500.jpg',
            name: 'Matt Ferguson',
            email: 'mdfergus@gmail.com'
          }}
        />
        <SideNavItem icon="art_track">About this project</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>
          <p>
            I built this site to analyze the relative positivity of new sources
            compared to other large new sources. I provided data for both
            center/unbiased, left leaning, right leaning, and conspiracy level
            sources.
          </p>
          <p>
            I used the EventRegistry.org API to pull each news source's 50 most
            shared stories during the week June 4 - 8, 2018. I limited the news
            stories to political and other issues dealing with government,
            because of this, some sources had less than 50 stories during the
            time period.
          </p>
          <p>
            I then used Google's Cloud Natural Language sentiment analysis API
            to analyze the body of each article. The Google API returned to me
            the sentiment and emotional level of every sentence in each article,
            I then combined the sentence level sentiment into an average
            sentiment for each article.
          </p>
        </SideNavItem>
      </SideNav>
    </div>
  );
};

export default navbar;
