import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { addCrudAsync, updateCrudAsync } from "../store/crudSlice/crudThunk";
import { Error } from "./error/Error";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedItem } = useAppSelector((state) => state.reactCruds);

  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (selectedItem) {
      setId(selectedItem.id);
      setTitle(selectedItem.title);
      setDescription(selectedItem.description);
    } else {
      setId(null);
      setTitle("");
      setDescription("");
    }
  }, [selectedItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      if (id) {
        dispatch(updateCrudAsync({ id, title, description }));
      } else {
        dispatch(addCrudAsync({ title, description }));
      }
      setId(null);
      setTitle("");
      setDescription("");
      setError("");
    } else {
      setError("Fill above fields");
    }
  };

  return (
    <form className="crud-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{id ? "Update Entry" : "Add a New Entry"}</h2>

      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onClick={() => setError("")}
          placeholder="Enter Title"
          className="form-input"
        />
      </div>

      <div className="input-group">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onClick={() => setError("")}
          placeholder="Enter Description"
          className="form-textarea"></textarea>
      </div>

      {error && <Error text={error} />}

      <button type="submit" className="form-button">
        {id ? "Update Entry" : "Add Entry"}
      </button>
    </form>
  );
};

export default Form;
