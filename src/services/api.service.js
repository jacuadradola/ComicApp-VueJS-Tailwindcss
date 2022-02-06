import axios from "axios";
//import { TokenService } from "../services/storage.service";

const ApiService = {
  init() {
    axios.defaults.baseURL = "https://rickandmortyapi.com/api";
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  customRequest(data) {
    let response = axios(data);
    return response;
  },
};

export default ApiService;
