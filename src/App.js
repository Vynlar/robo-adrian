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
  "outcomes over output",
];

function App() {
  const [[piece], setState] = useState([null, advice]);

  function giveAdvice() {
    setState(([_, remainingPieces]) => {
      if (remainingPieces.length === 0) {
        remainingPieces = advice;
      }
      const newPiece =
        remainingPieces[Math.floor(Math.random() * remainingPieces.length)];
      return [newPiece, remainingPieces.filter((p) => p !== newPiece)];
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
      <p>{piece || "click for guidance"}</p>
      <button onClick={giveAdvice}>get adrian-ism</button>
    </div>
  );
}

export default App;
