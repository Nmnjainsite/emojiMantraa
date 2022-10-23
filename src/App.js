import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Smiley",
  "🙂": "Slightly smiling",
  "🙈": "Blushing",
  "😐": "Awkward",
  "🤫": "My mom everytime to me",
  "👩‍🚀": "Astronaut",
  "🧑‍✈️": "pilot",
  "👩‍🍳": "cook",
  "👩‍💻": "technologist",
  "🕵️": "Detective"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This emoji we don't have in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Mantraa</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{
              cursor: "pointer",
              padding: "1rem",
              fontSize: "2rem",
              textAlign: "center"
            }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
