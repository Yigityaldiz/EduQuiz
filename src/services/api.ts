import { API_BASEURL } from "@/lib/constants";
import axios from "axios";

export const API = axios.create({
  baseURL: API_BASEURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
