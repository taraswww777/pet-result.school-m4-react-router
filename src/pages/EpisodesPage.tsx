import { Link } from 'react-router';
import { episodesData } from '../data';
import { ListEpisodes } from '../components/ListEpisodes';

export function EpisodesPage() {
  return (
    <div>
      <Link to="/">← На главную</Link>
      
      <h1>Эпизоды</h1>
      
      <div className="episodes-grid">
        {/* Здесь будет список эпизодов */}
        <ListEpisodes episodes={episodesData}/>
      </div>
    </div>
  );
}
