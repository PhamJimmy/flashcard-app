import React from "react";
import { Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import {listDecks} from "../utils/api/index";

function Layout() {
  function handleCreate() {
    console.log("Create!")
  }
  return (
    <>
      <Header />
      <div className="container">
        <button type="button" className="btn btn-secondary" onClick={handleCreate}>
          Create Deck
        </button>
        <Switch></Switch>
        {/* TODO: Implement the screen starting here */}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
