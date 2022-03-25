import { Link } from "react-router-dom";

function Error({ error }) {
  return (
    <div className="error">
      <h1>
        Error: {error.message}
        <Link to="/">Go Home</Link>
      </h1>
    </div>
  );
}

export default Error;