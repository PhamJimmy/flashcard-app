import { NavLink } from "react-router-dom";

function Breadcrumb({ deck, createDeck=false, study=false, addCard=false, editCard=false, cardId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/">Home</NavLink>
        </li>
        {!createDeck ? (
          <li className="breadcrumb-item">
            <NavLink to={`/decks/${deck.id}`}>{deck.name}</NavLink>
          </li>
        ) : (
          <li className="breadcrumb-item">Create Deck</li>
        )}
        {!study || <li className="breadcrumb-item">Study</li>}
        {!addCard || <li className="breadcrumb-item">Add Card</li>}
        {!editCard || <li className="breadcrumb-item">Edit Card {cardId}</li>}
      </ol>
    </nav>
  );
}

export default Breadcrumb;