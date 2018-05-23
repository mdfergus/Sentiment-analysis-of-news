import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="home school">
        <div className="homeText">
          <h2>Taiyaki wayfarers YOLO, palo santo craft beer!</h2>
        </div>
        <div>
          <img src="https://static.intsig.net/camscanner/images/user/banner_mobile.png" />
        </div>
      </div>
      <div className="spanner">
        <h3>Enroll your Campus Today</h3>
      </div>
      <div className="home school">
        <div>
          <p>
            Lorem ipsum dolor amet vice letterpress authentic, humblebrag salvia
            enamel pin knausgaard woke four dollar toast venmo franzen actually
            whatever stumptown.{' '}
          </p>
          <p>
            Kinfolk lumbersexual hammock blog photo booth. Bitters banh mi
            pitchfork literally shoreditch. Echo park gluten-free shoreditch
            chia twee lo-fi, listicle kinfolk try-hard intelligentsia godard.
            Small batch chartreuse pitchfork deep v tattooed, mumblecore
            chillwave taxidermy knausgaard farm-to-table kickstarter.{' '}
          </p>
          <p>
            Deep v narwhal taiyaki, kickstarter art party migas brunch. Yuccie
            heirloom single-origin coffee scenester viral.
          </p>

          <p>
            Cloud bread gluten-free shoreditch, brunch hella meggings stumptown
            gastropub you probably haven't heard of them meditation twee. Health
            goth heirloom fashion axe, helvetica everyday carry 3 wolf moon
            pickled. Four dollar toast lo-fi disrupt, live-edge banh mi tote bag
            aesthetic art party taxidermy 8-bit roof party street art. Narwhal
            tofu coloring book, gochujang cred pork belly single-origin coffee
            artisan edison bulb snackwave man braid letterpress cray.{' '}
          </p>
          <h3>Including:</h3>
          <ul>
            <li>Pabst</li>
            <li>Intelligentsia</li>
            <li>Green juice </li>
            <li>Brooklyn </li>
            <li>Drinking vinegar </li>
            <li>Asymmetrical</li>
            <li>Four dollar toast!</li>
          </ul>
        </div>
        <div>
          <h2>GET IT NOW!</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Campus Name:
              <input type="text" name="campus" />
            </label>
            <label>
              Referral Code:
              <input type="text" name="referral" />
            </label>
            <label>
              Receive future notieces:
              <input type="checkbox" name="notices" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
