import baseApi from "@/api";
import { GetCharactersPayload } from "@/store/characters/entities";

export default {
  getCharacters: (payload: GetCharactersPayload) =>
    baseApi.get(`people/?search=${payload.search || ""}&page=${payload.page}`),
};
