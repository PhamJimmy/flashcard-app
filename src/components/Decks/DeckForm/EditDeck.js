import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../../utils/api";

import Breadcrumb from "../../Breadcrumb";
import Error from "../../Error";
import DeckForm from "./DeckForm";

function EditDeck() {
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);
  const { deckId } = useParams();
  const { push } = useHistory();

  const initialForm = {
    name: "",
    description: "",
  };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  useEffect(() => {
    setForm(deck);
  }, [deck]);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleCancel = () => {
    setForm(initialForm);
    push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function submitDeck() {
      const deck = await updateDeck(form);
      setForm(initialForm);
      push(`/decks/${deck.id}`);
    }
    submitDeck();
  };

  if (error) return <Error error={error} />

  return deck ? (
    <>
      <Breadcrumb createDeck={true} />
      <h1>Create Deck</h1>
      <DeckForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default EditDeck;
