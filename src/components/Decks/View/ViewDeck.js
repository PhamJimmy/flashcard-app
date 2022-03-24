import { useEffect, useState } from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../../../utils/api";

import Breadcrumb from "../../Breadcrumb";
import Error from "../../Error";
import Card from "../Cards/Card";

function ViewDeck() {
  const [error, setError] = useState(undefined);
  const [deck, setDeck] = useState({});
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  const { go } = useHistory();

  const handleDeleteDeck = () => {};

  const handleDeleteCard = (cardId) => {
    if (window.confirm(`Delete this card?\n\nYou will not be able to recover it.`)) {
      deleteCard(cardId);
      go(0);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const cards =
    deck.cards && deck.cards.length > 0 ? (
      deck.cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleDeleteCard={() => handleDeleteCard(card.id)}
        />
      ))
    ) : (
      <p>This deck currently has no cards.</p>
    );

  if (error) return <Error error={error} />;

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
          <Link
            to={`${url}/cards/new`}
            type="button"
            className="btn btn-primary"
          >
            Add Cards
          </Link>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteDeck}
        >
          Delete
        </button>
      </div>
      <h1 className="mt-3 list-group">Cards</h1>
      {cards}
    </>
  );
}

export default ViewDeck;
