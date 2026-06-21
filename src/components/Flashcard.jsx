const cards = [
    { question: "Click next to start", answer: "Click next to start" },
    { question: "Prince Edward Island", answer: "Charlottetown" },
    { question: "Alberta", answer: "Edmonton" },
    { question: "New Brunswick", answer: "Fredericton" },
    { question: "Nova Scotia", answer: "Halifax" },
    { question: "Nunavut", answer: "Iqaluit" },
    { question: "Quebec", answer: "Quebec City" },
    { question: "Saskatchewan", answer: "Regina" },
    { question: "Newfoundland & Labrador", answer: "St. John's" },
    { question: "Ontario", answer: "Toronto" },
    { question: "British Columbia", answer: "Victoria" },
    { question: "Yukon", answer: "Whitehorse" },
    { question: "Manitoba", answer: "Winnipeg" },
    { question: "Northwest Territories", answer: "Yellowknife" },
    { question: "Canada", answer: "Ottawa" },
];
export const length = cards.length;

const Flashcard = ({ cardNum, cardSide, animate, onFlip }) => {

    const question = cards[cardNum].question;
    const answer = cards[cardNum].answer;

    return (
        <div className={`InfoCard ${cardSide === "answer" ? "flipped" : ""}`} onClick={onFlip}>
            <div className="flip-card-inner" style={{ transition: animate ? "transform 0.2s ease-in-out" : "none" }}>
                <div className="flip-card-front">
                    <h2>{question}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>{answer}</h2>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;