import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../../utils/api";

import Breadcrumb from "../../Breadcrumb";
import DeckForm from "./DeckForm";


function CreateDeck() {
  const { push } = useHistory();
  const initialForm = {
    name: "",
    description: ""
  }
  const [form, setForm] = useState(initialForm);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  }

  const handleCancel = () => {
    setForm(initialForm);
    push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    async function submitDeck() {
      const deck = await createDeck(form);
      setForm(initialForm);
      push(`/decks/${deck.id}`);
    }
    submitDeck();
  }

  return (
    <>
      <Breadcrumb createDeck={true} />
      <h1>Create Deck</h1>
      <DeckForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel} />
    </>
  )
}

export default CreateDeck;