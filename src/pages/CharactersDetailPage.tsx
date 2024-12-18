import { useParams } from 'react-router';
import { Link } from 'react-router';

export function CharactersDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/characters">← Назад к списку персонажей</Link>
      
      <h1>Детали персонажа</h1>
      
      <div>ID персонажа: {id}</div>
      
      {/* Здесь будет детальная информация о персонаже */}
    </div>
  );
}
