import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/shared/Container/Container';
import Filters from '../../components/catalog/Filters/Filters';
import CamperList from '../../components/catalog/CamperList/CamperList';
import LoadMore from '../../components/catalog/LoadMore/LoadMore';
import Loader from '../../components/shared/Loader/Loader';

import { fetchCampers } from '../../redux/campers/operations';
import { nextPage } from '../../redux/campers/campersSlice';

import {
  selectCampers,
  selectLoading,
  selectError,
  selectHasMore,
  selectPage,
} from '../../redux/campers/selectors';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
      })
    );
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(nextPage());

    dispatch(
      fetchCampers({
        page: page + 1,
        limit: 4,
      })
    );
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
                <CamperList />

                {hasMore && campers.length > 0 && (
                  <LoadMore onClick={handleLoadMore} />
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
