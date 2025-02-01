import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iReactCruds } from "../../types/types";
import {
  addCrudAsync,
  deleteCrudAsync,
  fetchCrudsAsync,
  updateCrudAsync,
} from "./crudThunk";

interface CrudState {
  cruds: iReactCruds[];
  selectedItem: iReactCruds | null;
  loading: boolean;
  error: string | null;
}

const initialState: CrudState = {
  cruds: [],
  loading: false,
  selectedItem: null,
  error: null,
};

const reactCrudsSlice = createSlice({
  name: "cruds",
  initialState,
  reducers: {
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrudsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCrudsAsync.fulfilled,
        (state, action: PayloadAction<iReactCruds[]>) => {
          state.loading = false;
          state.cruds = action.payload;
        }
      )
      .addCase(fetchCrudsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(
        addCrudAsync.fulfilled,
        (state, action: PayloadAction<iReactCruds>) => {
          state.cruds.unshift(action.payload);
        }
      )
      .addCase(updateCrudAsync.fulfilled, (state, action) => {
        state.cruds = state.cruds.map((crud) =>
          crud.id === action.payload.id ? action.payload : crud
        );
      })
      .addCase(
        deleteCrudAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.cruds = state.cruds.filter(
            (item) => item.id !== action.payload
          );
        }
      );
  },
});

export const { setSelectedItem } = reactCrudsSlice.actions;
export default reactCrudsSlice.reducer;
