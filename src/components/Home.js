import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { listDecks } from "../utils/api";
import DeckList from "./DeckList";

function Home() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);
  
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  return error ? (
    <div className="error">
      <h1>
        Error: {error}
        <Link to="/">Go Home</Link>
      </h1>
    </div>
  ) : (
    <div className="home">
      <button type="button" className="btn btn-secondary">
        + Create Deck
      </button>
      <DeckList decks={decks} />
    </div>
  );
}

export default Home;
