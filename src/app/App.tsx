import { BrowserRouter, Route, Routes } from 'react-router';
import {
  HomePage,
  LocationsPage,
  LocationsDetailPage,
  EpisodesPage,
  EpisodesDetailPage,
  CharactersPage,
  CharactersDetailPage,
} from '../pages';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:id" element={<LocationsDetailPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodesDetailPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharactersDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
