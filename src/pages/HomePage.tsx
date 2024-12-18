import { Link } from 'react-router';

export function HomePage() {
  return (
    <div>
      <h1>Рик и Морти</h1>
      <nav>
        <ul>
          <li>
            <Link to="/characters">Персонажи</Link>
          </li>
          <li>
            <Link to="/locations">Локации</Link>
          </li>
          <li>
            <Link to="/episodes">Эпизоды</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
