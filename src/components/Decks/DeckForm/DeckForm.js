
function DeckForm({ form, handleChange, handleCancel, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Deck</label>
        <input
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Deck Name"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="2"
          value={form.description}
          onChange={handleChange}
          placeholder="Brief description of the deck"
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-secondary mr-2"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default DeckForm;