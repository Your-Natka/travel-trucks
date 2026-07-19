import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';

const ShowMoreButton = ({ id }) => {
  return (
    <Link to={`/catalog/${id}`}>
      <Button>Show more</Button>
    </Link>
  );
};

export default ShowMoreButton;
