import { Episode } from '../types/Episode';
import { ListItemEpisodes } from './ListItemEpisodes';

interface ListEpisodesProps {
  episodes: Episode[];
}

export function ListEpisodes({episodes}:ListEpisodesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {episodes.map((episode: Episode) => (
        <ListItemEpisodes 
          key={episode.id}
          episode={episode}
        />
      ))}
    </div>
  );
}
