import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Flashcard({ cards }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (cards) {
      setIndex(0);
    }
  }, [cards]);

  const buttons = (
    <>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={handleFlip}
      >
        Flip
      </button>
      {!flip || <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>}
    </>
  );

  function handleFlip() {
    setFlip(flip => !flip);
  }

  function handleNext() {
    setFlip(false);
    if (index < cards.length - 1) {
      setIndex(index + 1);
    } else {
      window.confirm('Restart cards?\n\nClick "Cancel" to return to the home page instead.') ? setIndex(0) : history.push("/");
    }
  }

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">Card {index + 1} of {cards.length}</h5>
        <p className="card-text">{cards[index].front}</p>
        {buttons}
      </div>
    </div>
  );
}

export default Flashcard;