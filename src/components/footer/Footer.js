import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  socialMediaObj = {
    elements: [
      {  
        name: 'Github',
        link: 'https://github.com/KamilFilar',
        icon: ''
      },
      {
        name: 'Facebook',
        link: '',
        icon: ''
      },
      {
        name: 'Discord',
        link: 'CycuSolo#5102',
        icon: ''
      }
    ]
  };

  

  render() {
    const socialMedias = this.socialMediaObj.elements.map(elem => {
      return <div key={elem.name}>{elem.name}</div>
    })

    return (
      <footer>
        <div className="wrapper-text">
          <img src="" />
          <p>
            Are you bored? Find something interesting to do!
          </p>
        </div>
        <div className="wrapper-social-media">
          { socialMedias }
        </div>
      </footer>
    );
  }
}

export default Footer;
