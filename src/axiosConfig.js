import axios from 'axios';

const client = axios.create({
  baseURL: '', // server url
});

export default client;
