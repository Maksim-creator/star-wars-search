import baseApi from "@/api";
import { GetCharactersPayload } from "@/store/people/entities";

export default {
  getPeople: (payload: GetCharactersPayload) =>
    baseApi.get(`people/?search=${payload.search || ""}&page=${payload.page}`),
};
