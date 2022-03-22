import React from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck";

function DeckList({ decks }) {
  const content = decks.map((deck) => (
    <Deck key={deck.id} deck={deck} />
  ));

  return (
    <>
      <Link to="/" type="button" className="btn btn-secondary">
        + Create Deck
      </Link>
      <div className="list-group my-2">{content}</div>
    </>
  );
}

export default DeckList;
