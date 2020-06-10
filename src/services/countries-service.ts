import axios from "axios";
import { Country } from "@/types";

const BASE_URL = "https://restcountries.eu/rest/v2";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default {
  async fetchAll(): Promise<Country[]> {
    const response = await api.get("all");
    return response.data;
  },
};
