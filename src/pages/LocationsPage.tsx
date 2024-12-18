import { Link } from 'react-router';
import { locationsData } from '../data';
import { ListLocations } from '../components/ListLocations';

export function LocationsPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Локации</h1>

      <div className="locations-grid">
        <ListLocations locations={locationsData} />
      </div>
    </div>
  );
}
