import { Switch, Route } from "react-router-dom";

import Study from "./Study/Study";
import View from "./View/View";

function Decks() {
  return (
    <>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/:deckId">
          <View />
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
