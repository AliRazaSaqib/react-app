import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import Loader from "./loader/Loader";
import { Error } from "./error/Error";
import { Button } from "./button/Button";
import TimeStamp from "./pills/TimeStamp";
import { deleteCrudAsync } from "../store/crudSlice/crudThunk";
import { setSelectedItem } from "../store/crudSlice/crudsSlice";

const List: React.FC = () => {
  const { cruds, loading, error } = useAppSelector((state) => state.reactCruds);
  const dispatch = useAppDispatch();

  return (
    <div className="list-container">
      {loading && <Loader />}
      {error && <Error addClass="error-text" text={error} />}
      <ul className="crud-list">
        {cruds.map((item) => (
          <li key={item.id} className="crud-item">
            <TimeStamp timeStamp={item.created_at} addClass="time-stamp" />
            <h3 className="crud-title">{item.title}</h3>
            <p className="crud-description">{item.description}</p>
            <div className="btn-group">
              <Button
                addClass="edit-button delete-button"
                text="Edit"
                onClick={() => dispatch(setSelectedItem(item))}
              />
              <Button
                addClass="delete-button"
                text="Delete"
                onClick={() => dispatch(deleteCrudAsync(item.id))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
