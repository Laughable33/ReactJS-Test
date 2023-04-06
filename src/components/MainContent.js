import React from 'react';

const MainContent = () => {
  return (
    <main>
      {/* Add the main content here */}
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-12">
            {/*Stuff Left*/}
            <h1 className="text-white mt-5 mb-4 text-center">Welcome
            </h1>
            <h5 className="text-white text-center">Stay awhile.</h5>
          </div>
          <div className="col-12 col-md-3">
            {/*Updates Area*/}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-group">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Unblocker</h5>
                  <p className="card-text">A website based off of the Titanium Network Ultraviolet proxy, which allows you to surf the web freely.</p>
                  <a href="https://butteredcheese.ga" className
                  className="btn btn-primary">View Site</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Fella Game</h5>
                    <p className="card-text">A game where you play as a drug dealer in a city full of fun characters and quests.</p>
                    <a href="https://fellagame.com" className="btn btn-primary">View Site</a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title">Mongo Tom's Website</h5>
                    <p className="card-text">A website made entirely by our AI which is named "Mongo Tom."</p>
                    <a href="https://mongotomsbadasswebsite.com" className="btn btn-primary">View Site</a>
                  </div>
                </div>
              </div>
            </div>
            {/*News Area*/}
  
            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="card-group">
                    {/* Featured Websites cards here */}
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <h2 className="text-white text-center mb-4">News</h2>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Now Recruting</h5>
                      <p className="card-text">Unleash your creativity and join the butteredcheese.org developer community today! Collaborate with fellow developers, build innovative projects such as AI, and help transform the world! - <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6a0b0e0703042a081f1e1e0f180f0e09020f0f190f4405180d">[email&#160;protected]</a> </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-white">Posted on April 2, 2023</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Version 0.0.5 of Fella Game</h5>
                      <p className="card-text">A new update for the beta testers of Fella was released. You can read the full patch notes on the website. - fellagame.com</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-white">Posted on March 20, 2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/*News Area End*/}
  
          </div>
        </div>
      </main>
    );
  };
  
  export default MainContent;
  