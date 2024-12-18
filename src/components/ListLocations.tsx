import { Location } from '../types/Location';
import { ListItemLocations } from './ListItemLocations';

interface ListLocationsProps {
  locations: Location[];
}

export function ListLocations({ locations }: ListLocationsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {locations.map((location) => (
        <ListItemLocations
          key={location.id}
          location={location}
        />
      ))}
    </div>
  );
}
