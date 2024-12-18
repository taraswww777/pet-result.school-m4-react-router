import { Character } from "../types/Character";
import { formatDateForShow } from "../utils";

interface CardCharacterProps {
  character: Character;
}

export function CardCharacter({ character }: CardCharacterProps) {
  return (
<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <div className="p-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">{character.name}</h2>
        <div className="relative h-48">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`w-2 h-2 rounded-full ${
                character.status === "Alive"
                  ? "bg-green-500"
                  : character.status === "Dead"
                  ? "bg-red-500"
                  : "bg-gray-500"
              }`}
            />
            <p className="text-sm font-medium text-blue-600">
              {character.status} - {character.species}
            </p>
          </div>
          <p className="text-gray-600 text-sm mb-1">Пол: {character.gender}</p>
          {character.type && (
            <p className="text-gray-600 text-sm mb-1">Тип: {character.type}</p>
          )}
          <p className="text-gray-600 text-sm">
            Дата создания: {formatDateForShow(character.created)}
          </p>
        </div>
      </div>
    </div>
  );
}
