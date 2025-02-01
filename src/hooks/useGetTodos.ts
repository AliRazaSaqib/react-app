import { useEffect } from "react";
import { fetchCrudsAsync } from "../store/crudSlice/crudThunk";
import { useAppDispatch } from "./storeHooks";

export const useGetTodos = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCrudsAsync());
  }, [dispatch]);
};
