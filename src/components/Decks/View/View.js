import { Switch, Route, useRouteMatch } from "react-router-dom";
import NotFound from "../../../Layout/NotFound";

import AddCard from "../Cards/CardForm/AddCard";
import EditCard from "../Cards/CardForm/EditCard";
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default View;
