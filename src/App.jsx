import './App.css';
import { useRef } from 'react';
import Flashcard, { length } from './components/Flashcard'

const App = () => {
  const nextCardRef = useRef(null);

  var x = 2;
  const flipCard = () => {
    x = x + 1;
  }

  return (
    <div className="App">
      <h1>🍁 Canadian Capital Quiz!</h1>
      <h2>It wouldn't be very polite not to know your neighbor's capitals. Get studying, eh?</h2>
      <p>Number of cards: {length}</p>
      <Flashcard nextCardRef={nextCardRef} />
      <button onClick={() => nextCardRef.current?.()}>Next ➡</button>
    </div>
  )
}

export default App;