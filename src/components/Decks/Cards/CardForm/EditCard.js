import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { updateCard, readCard, readDeck } from "../../../../utils/api";
import Breadcrumb from "../../../Breadcrumb";
import Error from "../../../Error";
import CardForm from "./CardForm";

function EditCard() {
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [error, setError] = useState(undefined);
  const { push } = useHistory();
  const { deckId, cardId } = useParams();

  const initialForm = {
    front: "",
    back: "",
  };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();
    readCard(cardId, abortController.signal).then(setCard).catch(setError);
    return () => abortController.abort();
  }, [cardId]);

  useEffect(() => {
    setForm(card);
  }, [card])

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleCancel() {
    setForm(initialForm);
    push(`/decks/${deckId}`);
  }

  function handleSubmit() {
    updateCard(form)
      .then(setForm(initialForm))
      .then(push(`/decks/${deckId}`));
  }

  if (error) return <Error error={error} />;

  return card ? (
    <>
      <Breadcrumb deck={deck} editCard={true} cardId={cardId} />
      <h1>Edit Card</h1>
      <CardForm
        form={form}
        handleChange={handleChange}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default EditCard;
