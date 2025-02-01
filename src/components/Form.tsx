import React, { useState } from "react";
import { useAppDispatch } from "../hooks/storeHooks";
import { addCrudAsync } from "../store/crudSlice/crudThunk";

const Form: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addCrudAsync({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="crud-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add a New Entry</h2>

      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="form-input"
        />
      </div>

      <div className="input-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="form-textarea"></textarea>
      </div>

      <button type="submit" className="form-button">
        Add Entry
      </button>
    </form>
  );
};

export default Form;
