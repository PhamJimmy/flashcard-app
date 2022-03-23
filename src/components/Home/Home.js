import { Switch, Route } from "react-router-dom";

import DeckList from "./DeckList";
import NotFound from "../../Layout/NotFound";
import Decks from "../Decks/Decks";

function Home() {
  return (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <DeckList />
        </Route>
        <Route path="/decks">
          <Decks />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
