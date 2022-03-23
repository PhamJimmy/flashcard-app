import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <p>Page does not exist. Click <Link to="/">here</Link> to go home.</p>
    </div>
  );
}

export default NotFound;
