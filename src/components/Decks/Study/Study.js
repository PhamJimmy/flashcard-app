import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

import { readDeck } from "../../../utils/api";
import Breadcrumb from "../../Breadcrumb";
import Error from "../../Error";
import Flashcard from "./Flashcard";


function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  if (error) return <Error error={error} />;

  return deck.cards ? (
    <>
      <Breadcrumb deck={deck} study={true} />
      <h1>Study: {deck.name}</h1>
      {deck.cards.length > 2 ? (
        <Flashcard cards={deck.cards} />
      ) : (
        <>
          <h2>Not enough cards.</h2>
          <p>
            You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.
          </p>
          <Link to={`/decks/${deckId}/cards/new`}
            type="button"
            className="btn btn-primary"
          >
            + Add Cards
          </Link>
        </>
      )}
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Study;