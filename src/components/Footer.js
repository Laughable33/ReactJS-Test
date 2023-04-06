import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-5">
<div className="container p-4">
  <section className="mb-4">
        {/* Add Font Awesome icons */}
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/butteredcheese.org" role="button">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com/butteredcheese_org" role="button">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/@butteredcheese_org/featured" role="button">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.github.com/butteredcheese-org" role="button">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      </section>

      <section className="mb-4">
        <p>
          Butteredcheese.org is a community of developers creating AI applications, games, and websites. We are always looking for new talent, so if you are interested in joining, contact us!
        </p>
      </section>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        Copyright &copy; {new Date().getFullYear()} Butteredcheese.org. All rights reserved.
      </div>
    </div>
  </footer>
);
};

export default Footer;
