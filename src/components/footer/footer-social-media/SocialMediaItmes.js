import React from "react";
import "./SocialMediaItems.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faDiscord} from "@fortawesome/free-brands-svg-icons";

function checkIcon(icon) {
  if (icon === "faGithub") return faGithub;
  if (icon === "faFacebook") return faFacebook;
  if (icon === "faDiscord") return faDiscord;
}

const SocialMediaItems = (props) => {
  return (
    <div className="social-media-item" key={ props.element.name }>
      <a href={ props.element.link } target="_blank">
        <FontAwesomeIcon
          icon={ checkIcon(props.element.icon) }
          className="icon fa-lg"
        />
        { props.element.name }
      </a>
    </div>
  );
};

export default SocialMediaItems;
