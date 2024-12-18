import { Link } from 'react-router';
import { ListCharacters } from '../components/ListCharacters';
import { charactersData } from '../data';

export function CharactersPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Персонажи</h1>
      
      <div className="characters-grid">
        <ListCharacters characters={charactersData}/>
      </div>
    </div>
  );
}
