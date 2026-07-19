import { useSelector } from 'react-redux';

import { selectFilteredCampers } from '../../../redux/filters/filteredSelectors';

import CamperCard from '../../catalog/CamperCard/CamperCard';

import css from './CamperList.module.css';

const CamperList = () => {
  const campers = useSelector(selectFilteredCampers);

  if (!campers.length) {
    return null;
  }

  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id} className={css.item}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
