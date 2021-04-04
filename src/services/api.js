import axios from 'axios';

export const api = axios.create({ baseURL: '' });
export const viaCEPApi = axios.create({ baseURL: 'https://viacep.com.br/ws' });

