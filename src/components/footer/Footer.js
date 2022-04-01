import React from "react";
import SocialMediaItems from './footer-social-media/SocialMediaItmes';
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  socialMediaObj = {
    elements: [
      {  
        name: 'Github',
        link: 'https://github.com/KamilFilar',
        icon: 'faGithub'
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/kamilfilar',
        icon: 'faFacebook'
      },
      {
        name: 'Discord',
        link: 'https://discord.gg/DFf5qFNUWM',
        icon: 'faDiscord'
      }
    ]
  };

  render() {
    const socialMedias = this.socialMediaObj.elements.map(e => {
      return <SocialMediaItems element={e} key={e.name}/>
    })

    return (
      <footer>
        <div className="wrapper-text">
          <p>
            Are you still bored? Find me on social media and let's do something great!
          </p>
          <FontAwesomeIcon
            icon={ faAngleDoubleRight }
            className="icon fa-2x"
          />
        </div>
        <div className="wrapper-social-media">
          { socialMedias }
        </div>
      </footer>
    );
  }
}

export default Footer;
