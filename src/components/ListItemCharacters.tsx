import { Link } from "react-router";
import { Character } from "../types/Character";
import { formatDateForShow } from "../utils";

interface ListItemCharactersProps {
  character: Character;
}

export function ListItemCharacters({ character }: ListItemCharactersProps) {
  return (
    <Link 
    to={`/characters/${character.id}`}
    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-2">{character.name}</h3>
    <p className="text-sm font-medium text-blue-600 mb-3">{character.status}</p>
    <p className="text-gray-600 text-sm">Дата создания: {formatDateForShow(character.created)}</p>
  </Link>
  );
}
