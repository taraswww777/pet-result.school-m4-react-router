import { Episode } from '../types/Episode';

interface CardEpisodeProps {
  episode: Episode;
}

export function CardEpisode({ episode }: CardEpisodeProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{episode.name}</h2>
        
        <div className="space-y-4">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              {episode.episode}
            </span>
          </div>

          <div className="text-gray-600">
            <p className="mb-2">
              <span className="font-medium">Дата выхода:</span>{' '}
              {new Date(episode.air_date).toLocaleDateString('ru-RU')}
            </p>
            <p>
              <span className="font-medium">Дата создания:</span>{' '}
              {new Date(episode.created).toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
