import { Link } from 'react-router';

export function LocationsDetailPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Локация</h1>
      
      <div className="characters-grid">
        {/* Здесь будет список персонажей из этой локации */}
      </div>
    </div>
  );
}
