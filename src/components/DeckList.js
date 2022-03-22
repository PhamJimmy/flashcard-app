import React from "react";
import Deck from "./Deck";

function DeckList({ decks }) {
  
  const content = decks.map(deck => <Deck key={deck.id} deck={deck} />)

  return (
    <div className="list-group pt-2">
      {content}
    </div>
  );
}

export default DeckList;