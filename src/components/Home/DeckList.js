import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { listDecks } from "../../utils/api";
import Deck from "./Deck";
import Error from "../Error";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  const content = decks.map(deck => <Deck key={deck.id} deck={deck} />);

  return error ? (
    <Error error={error} />
  ) : (
    <>
      <Link to="/" type="button" className="btn btn-secondary">
        + Create Deck
      </Link>
      <div className="list-group my-2">{content}</div>
    </>
  )
}

export default DeckList;
