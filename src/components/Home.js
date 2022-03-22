import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { listDecks } from "../utils/api";
import DeckList from "./DeckList";
import Study from "./Study";
import NotFound from "../Layout/NotFound";
import Error from "./Error";

function Home() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);
    return () => abortController.abort();
  }, []);

  return error ? (
    <Error error={error} />
  ) : (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <DeckList decks={decks} />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
