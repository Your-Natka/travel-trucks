import LocationFilter from '../LocationFilter/LocationFilter';
import VehicleTypeFilter from '../VehicleTypeFilter/VehicleTypeFilter';
import EngineFilter from '../EngineFilter/EngineFilter';
import TransmissionFilter from '../TransmissionFilter/TransmissionFilter';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Button from '../../shared/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { setLocation, clearFilters } from '../../../redux/filters/filtersSlice';
import { selectLocation } from '../../../redux/filters/selectors';

import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  const handleSearch = () => {
    console.log('Search');
  };

  return (
    <aside className={css.filters}>
      <LocationFilter
        value={location}
        onChange={e => dispatch(setLocation(e.target.value))}
      />

      <SectionTitle className={css.title}>Filters</SectionTitle>

      <VehicleTypeFilter />

      <EngineFilter />

      <TransmissionFilter />

      <div className={css.buttons}>
        <Button variant="primary" size="full" onClick={handleSearch}>
          Search
        </Button>

        <Button
          variant="secondary"
          size="full"
          onClick={() => dispatch(clearFilters())}
        >
          Clear filters
        </Button>
      </div>
    </aside>
  );
};

export default Filters;
