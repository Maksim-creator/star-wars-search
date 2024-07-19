import baseApi from "@/api";

export default {
  getPeople: (page: number | undefined = 1, search: string | undefined = "") =>
    baseApi.get(`people/?search=${search}&page=${page}`),
};
