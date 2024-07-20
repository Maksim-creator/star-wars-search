import { createAsyncThunk } from "@reduxjs/toolkit";
import characters from "../../api/characters";
import {
  GetCharactersPayload,
  GetCharactersResponse,
} from "@/store/characters/entities";

export const getCharacters = createAsyncThunk<
  GetCharactersResponse,
  GetCharactersPayload
>("characters/getCharacters", async (payload, { rejectWithValue }) => {
  try {
    const response = await characters.getCharacters(payload);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
