import LocationFilter from '../LocationFilter/LocationFilter';
import VehicleTypeFilter from '../VehicleTypeFilter/VehicleTypeFilter';
import EngineFilter from '../EngineFilter/EngineFilter';
import TransmissionFilter from '../TransmissionFilter/TransmissionFilter';

import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Button from '../../shared/Button/Button';

import css from './Filters.module.css';

const Filters = () => {
  return (
    <aside className={css.filters}>
      <LocationFilter />

      <SectionTitle className={css.title}>Filters</SectionTitle>

      <VehicleTypeFilter />

      <EngineFilter />

      <TransmissionFilter />

      <div className={css.buttons}>
        <Button variant="primary" size="full">
          Search
        </Button>
        <Button variant="secondary" size="full">
          Clear filters
        </Button>
      </div>
    </aside>
  );
};

export default Filters;
