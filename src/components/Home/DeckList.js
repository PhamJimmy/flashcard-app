import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { deleteDeck, listDecks } from "../../utils/api";
import Deck from "./Deck";
import Error from "../Error";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  const { go } = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  const handleDelete = (deckId) => {
    if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
      deleteDeck(deckId);
      go(0);
    }
  }

  const content = decks.map(deck => <Deck key={deck.id} deck={deck} handleDelete={() => handleDelete(deck.id)} />);

  return error ? (
    <Error error={error} />
  ) : (
    <>
      <Link to="/decks/new" type="button" className="btn btn-secondary">
        + Create Deck
      </Link>
      <div className="list-group my-2">{content}</div>
    </>
  )
}

export default DeckList;
