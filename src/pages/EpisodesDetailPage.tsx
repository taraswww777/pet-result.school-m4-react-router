import { Link } from 'react-router';

export function EpisodesDetailPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Эпизоды</h1>
      
      <div className="characters-grid">
        {/* Здесь будет список персонажей */}
      </div>
    </div>
  );
}

