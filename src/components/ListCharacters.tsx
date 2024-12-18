import { Character } from '../types/Character';
import { ListItemCharacters } from './ListItemCharacters';

interface ListCharactersProps {
  characters: Character[];
}

export function ListCharacters({ characters }: ListCharactersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
       {characters.map((character) => (
        <ListItemCharacters 
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}
