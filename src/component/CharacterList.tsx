import React, { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { useNavigate } from 'react-router-dom';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

type CharacterApiResponse = {
  info: {
    next: string | null;
    prev: string | null;
    pages: number;
    count: number;
  };
  results: Character[];
};

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = useCharacters(page) as { data: CharacterApiResponse, isLoading: boolean, refetch: () => void };
  const navigate = useNavigate();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Status</th>
                <th>Species</th>
              </tr>
            </thead>
            <tbody>
              {data?.results.map((char: Character) => (
                <tr key={char.id} onClick={() => navigate(`/character/${char.id}`)} style={{ cursor: 'pointer' }}>
                  <td><img src={char.image} alt={char.name} width={50} /></td>
                  <td>{char.name}</td>
                  <td>{char.status}</td>
                  <td>{char.species}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Previous</button>
            <span> Page {page} </span>
            <button disabled={!data?.info.next} onClick={() => setPage(p => p + 1)}>Next</button>
            <button disabled={!data?.info.next} onClick={()=> refetch()}>Refresh</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterList;
