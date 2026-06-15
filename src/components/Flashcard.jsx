import { useState, useEffect } from 'react';

const cards = {
    "Click next to start": "Click next to start",
    "Prince Edward Island": "Charlottetown",
    "Alberta": "Edmonton",
    "New Brunswick": "Fredericton",
    "Nova Scotia": "Halifax",
    "Nunavut": "Iqaluit",
    "Canada": "Ottawa",
    "Quebec": "Quebec City",
    "Saskatchewan": "Regina",
    "Newfoundland & Labrador": "St. Johns",
    "Ontario": "Toronto",
    "British Columbia": "Victoria",
    "Yukon": "Whitehorse",
    "Manitoba": "Winnipeg",
    "Northwest Territories": "Yellowknife",
};
const keys = Object.keys(cards);
export const length = keys.length;

const Flashcard = ({ nextCardRef }) => {
    const [cardNum, setCardNum] = useState(0);
    const [cardSide, setCardSide] = useState("question");
    const [animate, setAnimate] = useState(true);

    const question = keys[cardNum]
    const answer = cards[keys[cardNum]]

    const nextCard = () => {
        let nextCardNum = cardNum
        while (nextCardNum === cardNum) {
            nextCardNum = Math.floor(Math.random() * (length - 1)) + 1
        }
        setAnimate(false);
        setCardNum(nextCardNum);
        setCardSide("question");
        requestAnimationFrame(() => setAnimate(true));
    }

    useEffect(() => {
        if (nextCardRef) nextCardRef.current = nextCard;
    }, [nextCard])

    const flipCard = () => {
        setCardSide(prev => prev === "question" ? "answer" : "question");
    }

    return (
        <div className={`InfoCard ${cardSide === "answer" ? "flipped" : ""}`} onClick={flipCard}>
            <div className="flip-card-inner" style={{ transition: animate ? "transform 0.2s ease-in-out" : "none" }}>
                <div className="flip-card-front">
                    <h2>{question}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>{answer}</h2>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;