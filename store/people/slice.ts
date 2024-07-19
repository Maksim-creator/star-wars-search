import { createSlice } from "@reduxjs/toolkit";
import { GetCharactersResponse } from "./entities";
import { getCharacters } from "@/store/people/thunk";

interface InitialState {
  charactersData?: GetCharactersResponse;
  charactersLoading?: boolean;
  charactersRefreshing: boolean;
  charactersError?: boolean;
}

const initialState: InitialState = {
  charactersRefreshing: false,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      if (action.meta.arg?.isRefreshing) {
        state.charactersRefreshing = true;
      } else {
        state.charactersLoading = true;
      }
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.charactersLoading = false;
      state.charactersRefreshing = false;
      state.charactersData = action.payload;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.charactersLoading = false;
      state.charactersRefreshing = false;
    });
  },
});

export const { reducer } = peopleSlice;
