import { useEffect, useState } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

import { readDeck } from "../../../utils/api";
import Error from "../../Error";
import AddEditCard from "../Cards/AddEditCard";
import ViewDeck from "./ViewDeck";

function View() {
  const { deckId } = useParams();
  const { path } = useRouteMatch();
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  if (error) return <Error error={error} />;

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <ViewDeck deck={deck} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddEditCard deck={deck} />
        </Route>
      </Switch>
    </>
  );
}

export default View;
