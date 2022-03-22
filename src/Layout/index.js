import React from "react";

import Header from "./Header";
import Home from "../components/Home";

function Layout() {
  return (
    <>
      <Header />
      <div className="container mb-3">
        {/* TODO: Implement the screen starting here */}
        <Home />
      </div>
    </>
  );
}

export default Layout;
