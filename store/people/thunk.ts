import { createAsyncThunk } from "@reduxjs/toolkit";
import people from "@/api/people";
import {
  GetCharactersPayload,
  GetCharactersResponse,
} from "@/store/people/entities";

export const getCharacters = createAsyncThunk<
  GetCharactersResponse,
  GetCharactersPayload
>("people/getCharacters", async (payload, { rejectWithValue }) => {
  try {
    const response = await people.getPeople(payload);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
