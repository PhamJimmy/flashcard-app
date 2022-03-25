import { useParams } from "react-router-dom";

function CardForm({ form, handleChange, handleDone, handleSave, handleCancel, handleSubmit }) {
  const { cardId } = useParams();

  const buttons = !cardId ? (
    <>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={handleDone}
      >
        Done
      </button>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </>
  ) : (
    <>
    <>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </>
    </>
  );

  return (
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
      {buttons}
    </form>
  );
}

export default CardForm;