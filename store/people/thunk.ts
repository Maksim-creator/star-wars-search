import { createAsyncThunk } from "@reduxjs/toolkit";
import people from "@/api/people";
import {
  GetCharactersPayload,
  GetCharactersResponse,
} from "@/store/people/entities";

export const getCharacters = createAsyncThunk<
  GetCharactersResponse,
  GetCharactersPayload | undefined
>("people/getCharacters", async (_, { rejectWithValue }) => {
  try {
    const response = await people.getPeople();
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
