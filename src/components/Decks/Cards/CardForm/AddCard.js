import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { createCard, readDeck } from "../../../../utils/api";
import Breadcrumb from "../../../Breadcrumb";
import Error from "../../../Error";
import CardForm from "./CardForm";

function AddCard() {
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);
  const { push } = useHistory();
  const { deckId } = useParams();
  
  const initialForm = {
    front: "",
    back: ""
  }
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleDone() {
    createCard(deck.id, form);
    setForm(initialForm);
    push(`/decks/${deck.id}`)
  }

  function handleSave() {
    createCard(deck.id, form);
    setForm(initialForm);
  }

  if (error) return <Error error={error} />

  return (
    <>
      <Breadcrumb deck={deck} addCard={true} />
      <h1>{deck.name}: Add Card</h1>
      <CardForm form={form} handleChange={handleChange} handleDone={handleDone} handleSave={handleSave} />
    </>
  );
}

export default AddCard;