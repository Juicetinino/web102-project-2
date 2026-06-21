import './App.css';
import { useState } from 'react';
import Flashcard, { length } from './components/Flashcard';

const App = () => {

  const [cardNum, setCardNum] = useState(0);
  const [cardSide, setCardSide] = useState("question");
  const [animate, setAnimate] = useState(true);

  const nextCard = () => {
    let nextCardNum = cardNum;
    // Ensure the next cardNum is different from current
    while (nextCardNum === cardNum) {
      // should give a integers between 1 and length - 1 ("Click next to start" is unreachable.)
      nextCardNum = Math.floor(Math.random() * (length - 1)) + 1;
    }
    setAnimate(false);
    setCardNum(nextCardNum);
    setCardSide("question");
    requestAnimationFrame(() => setAnimate(true));
  };

  const flipCard = () => {
    setCardSide(prev => prev === "question" ? "answer" : "question");
  };

  return (
    <div className="App">
      <h1>🍁 Canadian Capital Quiz!</h1>
      <h2>It wouldn't be very polite not to know your neighbor's capitals. Get studying, eh?</h2>
      <p>Number of cards: {length}</p>
      <Flashcard cardNum={cardNum} cardSide={cardSide} animate={animate} onFlip={flipCard} />
      <button onClick={nextCard}>Next ➡</button>
    </div>
  );
};

export default App;