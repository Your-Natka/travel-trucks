import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/shared/Container/Container';
import Filters from '../../components/catalog/Filters/Filters';
import CamperList from '../../components/catalog/CamperList/CamperList';
import LoadMore from '../../components/catalog/LoadMore/LoadMore';
import Loader from '../../components/shared/Loader/Loader';
import EmptyState from '../../components/shared/EmptyState/EmptyState';

import { fetchCampers } from '../../redux/campers/operations';
import { clearFilters } from '../../redux/filters/filtersSlice';

import { selectLoading, selectError } from '../../redux/campers/selectors';
import { selectFilteredCampers } from '../../redux/filters/filteredSelectors';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredCampers = useSelector(selectFilteredCampers);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: 1,
        limit: 100,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(prev => (filteredCampers.length < prev ? 4 : prev));
  }, [filteredCampers.length]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  return (
    <main className={css.page}>
      <Container>
        <section className={css.catalog}>
          <aside className={css.sidebar}>
            <Filters />
          </aside>

          <section className={css.content}>
            {loading && <Loader />}

            {error && <p>{error}</p>}

            {!loading && !error && (
              <>
                {filteredCampers.length === 0 ? (
                  <EmptyState onClear={handleClear} onViewAll={handleClear} />
                ) : (
                  <>
                    <CamperList
                      campers={filteredCampers.slice(0, visibleCount)}
                    />

                    {visibleCount < filteredCampers.length && (
                      <LoadMore onClick={handleLoadMore} />
                    )}
                  </>
                )}
              </>
            )}
          </section>
        </section>
      </Container>
    </main>
  );
};

export default CatalogPage;
