import axios from "axios";
import Config from "@/constants/Config";

const baseApi = axios.create({
  baseURL: Config.baseUrl,
});

export default baseApi;
