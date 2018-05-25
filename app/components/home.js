import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="one column" />
        <div className="four columns ">
          <h3 className="main-title">Students and the Campuses</h3>
          <p>
            Prep is mobile registry solution to easily manage students. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="seven columns">
          <img src="https://static.intsig.net/camscanner/images/user/banner_mobile.png" />
        </div>
      </div>
      <div className="spanner">
        <h3>Enroll your school today</h3>
      </div>
      <div className="row green">
        <div className="green one column" />
        <div className="green six columns home-text">
          <p>
            Lorem ipsum dolor amet vice letterpress authentic, humblebrag salvia
            enamel pin knausgaard woke four dollar toast venmo franzen actually
            whatever stumptown.
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
        </div>
        <div className="green five columns">
          <h2>GET IT NOW!</h2>
          <form>
            <div className="row">
              <label>
                <div className="four columns">Name:</div>
                <input type="text" name="name" className="seven columns" />
              </label>
            </div>
            <div className="row">
              <label>
                <div className="four columns">Email:</div>
                <input type="text" name="email" className="seven columns" />
              </label>
            </div>
            <div className="row">
              <label>
                <div className="four columns">Campus Name:</div>
                <input type="text" name="campus" className="seven columns" />
              </label>
            </div>
            <div className="row">
              <label>
                <div className="four columns">Referral Code:</div>
                <input type="text" name="referral" className="seven columns" />
              </label>
            </div>
            <div className="row">
              <label>
                <div className="four columns">Receive future notieces:</div>
                <input
                  type="checkbox"
                  name="notices"
                  className="five columns check"
                />
              </label>
            </div>
            <div className="row">
              <button type="button" className="four columns home-button">
                Enroll me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
