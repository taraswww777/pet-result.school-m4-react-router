import { Link } from 'react-router';

export function LocationsPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Локации</h1>
      
      <div className="locations-grid">
        {/* Здесь будет список локаций */}
      </div>
    </div>
  );
}
