import { useEffect, useState } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

import { readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import Error from "../Error";
import AddCard from "./Cards/AddCard";

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
      <Breadcrumb deck={deck} />
      <Switch>
        <Route path={`${path}/cards/add`}>
          <AddCard deck={deck} />
        </Route>
      </Switch>
    </>
  );
}

export default View;
