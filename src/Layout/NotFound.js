import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
