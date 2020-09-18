import React, { useEffect, useState } from "react";
import "./App.css";

const advice = [
  "login is not a feature",
  "what problem are you solving?",
  "tell me a story about that",
  "we are not here to write software, we are here to change the world",
  "what do the users think?",
  "individuals and interactions are more important than processes and tools",
  "working software is more important than comprehensive documentation",
  "customer collaboration is more important than contract negotiation",
  "responding to change is more important than following a plan",
  "stop using jira",
  "STICKY NOTES",
  "think, write, explain, place",
];

function App() {
  const [piece, setPiece] = useState();

  function giveAdvice() {
    setPiece((oldPiece) => {
      const newPiece = advice[Math.floor(Math.random() * advice.length)];
      if (oldPiece === newPiece) {
        giveAdvice();
      }
      return newPiece;
    });
  }

  useEffect(() => {
    if (piece) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = piece;
      window.speechSynthesis.speak(msg);
    }
  }, [piece]);

  return (
    <div id="main">
      <h1>r0bo-adri4n</h1>
      <p>{piece || "Click for guidance"}</p>
      <button onClick={giveAdvice}>get adrian-ism</button>
    </div>
  );
}

export default App;
