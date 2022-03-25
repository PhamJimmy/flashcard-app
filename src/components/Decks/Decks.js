import { Switch, Route } from "react-router-dom";
import NotFound from "../../Layout/NotFound";
import CreateDeck from "./DeckForm/CreateDeck";
import EditDeck from "./DeckForm/EditDeck";

import Study from "./Study/Study";
import View from "./View/View";

function Decks() {
  return (
    <>
      <Switch>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/:deckId">
          <View />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
