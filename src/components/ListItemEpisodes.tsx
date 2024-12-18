import { Link } from 'react-router';
import { Episode } from '../types/Episode';
import { formatDateForShow } from '../utils';


interface ListItemEpisodesProps {
  episode: Episode;
}

export function ListItemEpisodes({ episode }: ListItemEpisodesProps) {
  return (
    <Link 
      to={`/episodes/${episode.id}`}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{episode.name}</h3>
      <p className="text-sm font-medium text-blue-600 mb-3">{episode.episode}</p>
      <p className="text-gray-600 text-sm mb-1">Дата выхода: {formatDateForShow(episode.air_date)}</p>
      <p className="text-gray-600 text-sm">Дата создания: {formatDateForShow(episode.created)}</p>
    </Link>
  );
}
