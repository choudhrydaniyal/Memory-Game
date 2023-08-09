import "./App.css";
import CardsGrid from "./components/CardsGrid";
import { useState } from "react";
import { useEffect } from "react";

import jon_snow from "../src/assets/jon_snow.webp";
import rob_stark from "../src/assets/rob_stark.jpg";
import ned_stark from "../src/assets/ned_stark.webp";
import arya_stark from "../src/assets/arya_stark.webp";
import sansa_stark from "../src/assets/sansa_stark.jpeg";
import danny from "../src/assets/danny.jpg";
import rhaenyra from "../src/assets/rhaenyra.webp";
import daemon from "../src/assets/daemon.webp";
import oberyn from "../src/assets/oberyn.webp";
import cersei from "../src/assets/cersei.webp";
import jaime from "../src/assets/jaime.webp";
import red_woman from "../src/assets/red_woman.jpg";

function App() {
  const characters = {
    "Jon Snow": jon_snow,
    "Rob Stark": rob_stark,
    "Ned Stark": ned_stark,
    "Arya Stark": arya_stark,
    "Sansa Stark": sansa_stark,
    "Daenerys Targaryen": danny,
    "Daemon Targaryen": daemon,
    "Rhaenyra Targaryen": rhaenyra,
    "Cersei Lannister": cersei,
    "Prince Oberyn": oberyn,
    "Jamie Lannister": jaime,
    "Lady Malisandre": red_woman,
  };
  const [charactersNames, setCharactersNames] = useState(
    Object.keys(characters)
  );
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleCards = () => {
    const shuffleCards = [...charactersNames];

    for (let i = shuffleCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffleCards[randomIndex];
      shuffleCards[randomIndex] = shuffleCards[i];
      shuffleCards[i] = temp;
    }

    setCharactersNames(shuffleCards);
  };

  const handleClick = (character) => {
    if (clicked.includes(character)) {
      resetScore();
    } else {
      updateScore();
      setClicked([...clicked, character]);
    }
  };

  const resetScore = () => {
    setScore(0);
    setClicked([]);
  };

  const updateScore = () => {
    setScore(score + 1);
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  };

  useEffect(shuffleCards, [score]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: "5px", padding: "5px" }}>
        <h1>Memory Game</h1>
        <p style={{ fontWeight: "bold" }}>Score: {score}</p>
        <p style={{ fontWeight: "bold" }}>High Score: {highScore}</p>
        <p>=== HINT: DONT TOUCH A CHARACTER TWICE ===</p>
      </div>
      <div style={{ margin: "5px", padding: "5px" }}>
        <CardsGrid
          characters={characters}
          charactersNames={charactersNames}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
