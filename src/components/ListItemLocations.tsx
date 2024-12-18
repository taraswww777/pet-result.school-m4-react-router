import { Link } from 'react-router';
import { Location } from '../types/Location';
import { formatDateForShow } from '../utils';

interface ListItemLocationsProps {
  location: Location;
}

export function ListItemLocations({ location }: ListItemLocationsProps) {
  return (
    <Link
      to={`/locations/${location.id}`}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
      <p className="text-sm font-medium text-blue-600 mb-3">{location.type}</p>
      <p className="text-gray-600 text-sm mb-1">Измерение: {location.dimension}</p>
      <p className="text-gray-600 text-sm">Дата создания: {formatDateForShow(location.created)}</p>
    </Link>
  );
}
