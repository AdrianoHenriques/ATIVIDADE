import axios from 'axios';

import { AddressData } from '../types/cep';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  timeout: 15000,
});

export const searchAddressByCep = async (cep: string): Promise<AddressData> => {
  const response = await api.get(`${cep}/json/`);
  return response.data as AddressData;
};
