import { Link } from 'react-router';

export function EpisodesPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Эпизоды</h1>
      
      <div className="episodes-grid">
        {/* Здесь будет список эпизодов */}
      </div>
    </div>
  );
}
