import axios from 'axios';
import { Character, ApiResponse } from '../types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page: number): Promise<ApiResponse<Character>> => {
  const res = await axios.get<ApiResponse<Character>>(`${BASE_URL}/character?page=${page}`);
  return res.data;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const res = await axios.get<Character>(`${BASE_URL}/character/${id}`);
  return res.data;
};
