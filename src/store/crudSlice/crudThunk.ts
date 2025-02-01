import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCrud, deleteCrud, fetchCruds } from "../../api/reactCrudsAPI";

export const fetchCrudsAsync = createAsyncThunk("cruds/fetchAll", async () => {
  return await fetchCruds();
});

export const addCrudAsync = createAsyncThunk(
  "cruds/add",
  async ({ title, description }: { title: string; description: string }) => {
    return await addCrud(title, description);
  }
);

export const deleteCrudAsync = createAsyncThunk(
  "cruds/delete",
  async (id: string) => {
    await deleteCrud(id);
    return id;
  }
);
