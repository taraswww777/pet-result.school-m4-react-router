import { Location } from '../types/Location';
import { formatDateForShow } from '../utils';

interface CardLocationProps {
  location: Location;
}

export function CardLocation({ location }: CardLocationProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{location.name}</h2>
        
        <div className="space-y-4">
          <div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              {location.type}
            </span>
          </div>

          <div className="text-gray-600">
            <p className="mb-2">
              <span className="font-medium">Измерение:</span>{' '}
              {location.dimension}
            </p>
            <p>
              <span className="font-medium">Дата создания:</span>{' '}
              {formatDateForShow(location.created)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
