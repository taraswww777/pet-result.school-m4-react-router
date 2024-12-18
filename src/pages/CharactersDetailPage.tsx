import { useParams } from 'react-router';
import { Link } from 'react-router';
import { CardCharacter } from '../components/CardCharacter';
import { charactersData } from '../data';

export function CharactersDetailPage() {
  const { id } = useParams();
  const character = charactersData.find((character) => character.id === Number(id));

  if (!character) {
    return <div>Эпизод не найден</div>;
  }

  return (
    <div>
      <Link to="/characters">← Назад к списку персонажей</Link>
      
      <h1>Детали персонажа</h1>
      
      <div>ID персонажа: {id}</div>
      
      <div className="characters-grid">
        <CardCharacter character={character} />
      </div>
    </div>
  );
}
