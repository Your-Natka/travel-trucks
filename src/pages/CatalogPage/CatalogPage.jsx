import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/shared/Container/Container';
import Filters from '../../components/catalog/Filters/Filters';
import CamperList from '../../components/catalog/CamperList/CamperList';
import LoadMore from '../../components/catalog/LoadMore/LoadMore';
import Loader from '../../components/shared/Loader/Loader';
import EmptyState from '../../components/shared/EmptyState/EmptyState';

import { fetchCampers } from '../../redux/campers/operations';

import {
  selectCampers,
  selectLoading,
  selectError,
  selectHasMore,
} from '../../redux/campers/selectors';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
      })
    );
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;

    dispatch(
      fetchCampers({
        page: nextPage,
        limit: 4,
      })
    );

    setPage(nextPage);
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

            {!loading && !error && campers.length === 0 && <EmptyState />}

            {campers.length > 0 && (
              <>
                <CamperList campers={campers} />

                {hasMore && !loading && <LoadMore onClick={handleLoadMore} />}
              </>
            )}
          </section>
        </section>
      </Container>
    </main>
  );
};

export default CatalogPage;
