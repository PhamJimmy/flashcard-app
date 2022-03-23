import { Link, useRouteMatch } from "react-router-dom";

import Breadcrumb from "../../Breadcrumb";
import Card from "./Card";

function ViewDeck({ deck }) {
  const { url } = useRouteMatch();
  let cards;

  cards = (deck.cards && deck.cards.length > 0) ? (
    deck.cards.map(card => <Card key={card.id} card={card} />)
  ) : (
    <p>This deck currently has no cards.</p>
  )

  return (
    <>
      <Breadcrumb deck={deck} />
      <h2>{deck.name}</h2>
      <p>{deck.description}</p>
      <div className="d-flex justify-content-between">
        <div>
          <Link to={`${url}/edit`} type="button" className="btn btn-secondary">
            Edit
          </Link>
          <Link
            to={`${url}/study`}
            type="button"
            className="btn btn-primary mx-2"
          >
            Study
          </Link>
          <Link to={`${url}/cards/new`} type="button" className="btn btn-primary">
            Add Cards
          </Link>
        </div>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
      <h1 className="mt-3 list-group">Cards</h1>
      {cards}
    </>
  );
}

export default ViewDeck;
