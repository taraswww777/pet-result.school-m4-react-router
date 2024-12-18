import { Link, useParams } from 'react-router';
import { episodesData } from '../data';
import { CardEpisode } from '../components/CardEpisode';

export function EpisodesDetailPage() {
  const { id } = useParams();
  const episode = episodesData.find((episode) => episode.id === Number(id));

  if (!episode) {
    return <div>Эпизод не найден</div>;
  }

  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Эпизоды</h1>
      
      <div className="characters-grid">
        {/* Здесь будет список персонажей */}
        <CardEpisode episode={episode} />
      </div>
    </div>
  );
}

