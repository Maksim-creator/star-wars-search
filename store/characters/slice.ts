import { createSlice } from "@reduxjs/toolkit";
import { GetCharactersResponse } from "./entities";
import { getCharacters } from "@/store/characters/thunk";

interface InitialState {
  charactersData?: GetCharactersResponse;
  charactersLoading?: boolean;
  charactersRefreshing: boolean;
  charactersError?: boolean;
  charactersMoreLoading?: boolean;
}

const initialState: InitialState = {
  charactersRefreshing: false,
  charactersLoading: true,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      if (action.meta.arg.search) return;
      if (action.meta.arg?.isRefreshing) {
        state.charactersRefreshing = true;
      } else if (action.meta.arg.page) {
        state.charactersMoreLoading = true;
      } else {
        state.charactersLoading = true;
      }
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.charactersLoading = false;
      state.charactersRefreshing = false;
      state.charactersMoreLoading = false;

      const { search, isRefreshing, isLoadingMore } = action.meta.arg;

      if (search || isRefreshing) {
        state.charactersData = action.payload;
      } else if (isLoadingMore && state.charactersData) {
        const { next, count, previous, results } = action.payload;
        state.charactersData.next = next;
        state.charactersData.count = count;
        state.charactersData.previous = previous;
        state.charactersData.results = [
          ...state.charactersData.results,
          ...results,
        ];
      } else {
        state.charactersData = action.payload;
      }
    });

    builder.addCase(getCharacters.rejected, (state) => {
      state.charactersLoading = false;
      state.charactersRefreshing = false;
      state.charactersMoreLoading = false;
    });
  },
});

export const { reducer } = charactersSlice;
