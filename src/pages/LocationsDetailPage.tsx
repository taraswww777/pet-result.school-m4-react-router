import { Link } from 'react-router';
import { useParams } from 'react-router';
import { locationsData } from '../data';
import { CardLocation } from '../components/CardLocation';


export function LocationsDetailPage() {
  const { id } = useParams();
  const location = locationsData.find((location) => location.id === Number(id));

  if (!location) {
    return <div>Локация не найдена</div>;
  }

  return (
    <div>
      <Link to="/locations">← К списку локаций</Link>
      
      <CardLocation location={location} />      
    </div>
  );
}
