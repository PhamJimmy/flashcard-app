import { useState } from "react";
import { useHistory } from "react-router-dom";

import { createCard } from "../../../utils/api";
import Breadcrumb from "../../Breadcrumb";

function AddEditCard({ deck, addEdit, setAddEdit }) {
  const history = useHistory();
  
  const initialForm = {
    front: "",
    back: ""
  }
  const [form, setForm] = useState({ ...initialForm });

  function handleChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  function handleSubmit() {
    createCard(deck.id, form);
  }

  function handleDone({ target }) {
    handleSubmit(target);
    history.push(`decks/${deck.id}`)
  }

  function handleSave({ target }) {
    handleSubmit(target);
    setForm({ ...initialForm });
  }

  return (
    <>
      <Breadcrumb deck={deck} addCard={true} />
      <h1>{deck.name}: Add Card</h1>
      <form>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            rows="2"
            value={form.front}
            onChange={handleChange}
            placeholder="Front side of card"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            rows="2"
            value={form.back}
            onChange={handleChange}
            placeholder="Back side of card"
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary mr-2" onClick={handleDone}>
          Done
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </form>
    </>
  );
}

export default AddEditCard;