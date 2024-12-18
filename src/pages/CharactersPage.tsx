import { Link } from 'react-router';

export function CharactersPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Персонажи</h1>
      
      <div className="characters-grid">
        {/* Здесь будет список персонажей */}
      </div>
    </div>
  );
}
