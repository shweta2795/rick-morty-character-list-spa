import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api/rickMortyAPI';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
};

const CharacterDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Failed to load character.</div>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Origin: {data.origin.name}</p>
      <p>Location: {data.location.name}</p>
    </div>
  );
};

export default CharacterDetail;
