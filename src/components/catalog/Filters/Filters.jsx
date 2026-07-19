import LocationFilter from '../LocationFilter/LocationFilter';
import VehicleTypeFilter from '../VehicleTypeFilter/VehicleTypeFilter';
import EngineFilter from '../EngineFilter/EngineFilter';
import TransmissionFilter from '../TransmissionFilter/TransmissionFilter';
import EquipmentFilter from '../EquipmentFilter/EquipmentFilter';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Button from '../../shared/Button/Button';
import { resetCampers } from '../../../redux/campers/campersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, clearFilters } from '../../../redux/filters/filtersSlice';
import { selectLocation } from '../../../redux/filters/selectors';
import { fetchCampers } from '../../../redux/campers/operations';

import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  const handleSearch = () => {
    dispatch(resetCampers());

    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
      })
    );
  };

  const handleClear = () => {
    dispatch(clearFilters());
    dispatch(resetCampers());

    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
        filters: {},
      })
    );
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

      <EquipmentFilter />

      <TransmissionFilter />

      <div className={css.buttons}>
        <Button variant="primary" size="full" onClick={handleSearch}>
          Search
        </Button>

        <Button variant="secondary" size="full" onClick={handleClear}>
          Clear filters
        </Button>
      </div>
    </aside>
  );
};

export default Filters;
