import React from "react";
import "./Search.scss";

const letterToAnimation = ["Y", "o", "u", "r"];
const lettersAnimation = letterToAnimation.map((letter) => <span key={letter}>{letter}</span>);

const getRandomEmoji = () => {
  let emojiArr = ["😊", "😎", "🧐", "😁", "😜", "😂", "🙄", "🥰", "😋"];
  return emojiArr[(Math.random() * emojiArr.length) | 0];
}

const changeIcon = () => {
  let elem = document.getElementById("search-btn");
  return elem.innerHTML = getRandomEmoji();
}

class Search extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <p className="search-wrapper__title">
          Don't waste { lettersAnimation } time!
        </p>
        <div className="search-wrapper__box">
          <button onClick={ changeIcon } id="search-btn">
            { getRandomEmoji() }
          </button>
          <p> Click me and do something </p>
        </div>
      </div>
    );
  }
}

export default Search;
