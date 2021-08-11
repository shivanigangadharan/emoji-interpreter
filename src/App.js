import React, { useState } from 'react';
import './App.css';




function App() {
  const [meaning, setMeaning] = useState("Or, click on any of the emojis below. Meaning of emoji will appear here.");
  const emojis = {
    "😁": "grin",
    "😄": "laugh",
    "😉": "wink",
    "😎": "cool",
    "😠": "angry",
    "🚀": "rock8!"
  };

  var myEmojis = Object.keys(emojis);

  function handleInput(ip) {
    console.log(emojis[ip]);
    if (emojis[ip] == undefined) {
      setMeaning("Oops! That emoji doesn't exist in our dictionary, try something else?")
    }
    else {
      setMeaning("That means " + emojis[ip] + ".");
    }
  }

  function handleClick(em) {
    console.log(emojis[em]);
    setMeaning("That means " + emojis[em] + ".");
  }
  return (
    <div className="container">
      <h1> Emoji interpreter </h1>
      <form>
        <input onChange={(e) => { handleInput(e.target.value) }} className="inputText" placeholder="Enter an emoji here to know its meaning." type="text" />
        {/* <input className="btn-search" type="submit" value="Search" /> */}
      </form>
      <h4> {meaning} </h4>
      <div className="emojiList">
        {
          myEmojis.map((e) => {
            return (
              <div>
                <span className="emo" onClick={() => handleClick(e)} key={e} >
                  {e}
                </span>
              </div>
            )
          })
        }


      </div>
    </div>
  );
}

export default App;
