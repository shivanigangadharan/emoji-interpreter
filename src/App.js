import React, { useState } from 'react';
import './App.css';




function App() {
  const [meaning, setMeaning] = useState("Click on any of the emojis to know their meaning.");
  const emojis = {
    "🚀": "rock8!",
    "😁": "grin",
    "😄": "laugh",
    "😉": "wink",
    "😎": "cool",
    "😠": "angry",
    "😖": "cranky",
    "😏": "smirk",
    "😂": "tears of laughter",
    "😅": "awkward sweat",
    "😍": "lovely",
    "😒": "pissed",
    "😘": "kiss with heart",
    "😛": "tongue",
    "😜": "wink and tongue",
    "⚽": "football",
    "✨": "sparkle",
    "👍": "thumbs up",
    "👑": "crown",
    "👶": "infant",
    "👻": "ghost",
    "👼": "angel",
    "💀": "skull",
    "🎹": "piano",
    "🐣": "hatching chick"
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
      <h1> Emoji interpreter 🚀 </h1>

      <form>
        <input onChange={(e) => { handleInput(e.target.value) }} className="inputText" placeholder="Enter an emoji here to know its meaning." type="text" />
        {/* <input className="btn-search" type="submit" value="Search" /> */}
      </form>
      <div style={{ 'display': 'flex' }}>
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
        <br />
        <h4> {meaning} </h4>
      </div>
    </div >
  );
}

export default App;
