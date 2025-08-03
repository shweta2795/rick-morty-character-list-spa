import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/rickMortyAPI';

export const useCharacters = (page: number) => {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page)
  });
};
