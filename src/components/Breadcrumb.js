import { NavLink } from "react-router-dom";

function Breadcrumb({ deck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink>
        </li>
        <li className="breadcrumb-item">Study</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;