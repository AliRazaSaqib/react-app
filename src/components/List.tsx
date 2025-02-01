import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import Loader from "./loader/Loader";
import { Error } from "./error/Error";
import { Button } from "./button/Button";
import TimeStamp from "./pills/TimeStamp";
import { deleteCrudAsync } from "../store/crudSlice/crudThunk";
import {
  resetSelectedItem,
  setSelectedItem,
} from "../store/crudSlice/crudsSlice";

const List: React.FC = () => {
  const { cruds, loading, error, selectedItem } = useAppSelector(
    (state) => state.reactCruds
  );
  const dispatch = useAppDispatch();

  if (loading) return <Loader />;
  if (error) return <Error addClass="error-text" text={error} />;

  return (
    <div className="list-container">
      <ul className="crud-list">
        {cruds.map(({ id, created_at, title, description }) => (
          <li key={id} className="crud-item">
            <TimeStamp timeStamp={created_at} addClass="time-stamp" />
            <h3 className="crud-title">{title}</h3>
            <p className="crud-description">{description}</p>
            <div className="btn-group">
              <Button
                addClass="edit-button delete-button"
                text="Edit"
                onClick={() =>
                  dispatch(
                    setSelectedItem({ id, created_at, title, description })
                  )
                }
              />
              <Button
                addClass="delete-button"
                text="Delete"
                onClick={() => {
                  if (selectedItem?.id === id) {
                    dispatch(resetSelectedItem());
                  }
                  dispatch(deleteCrudAsync(id));
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
