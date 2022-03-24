import { Switch, Route, useRouteMatch } from "react-router-dom";

import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";
import ViewDeck from "./ViewDeck";

function View() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <ViewDeck />
        </Route>
        <Route path={`${path}/cards/new`}>
          <AddCard />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <EditCard />        
        </Route>
      </Switch>
    </>
  );
}

export default View;
