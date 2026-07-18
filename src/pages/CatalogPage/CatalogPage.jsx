import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../redux/campers/campersSlice';
import { fetchCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectLoading,
  selectError,
  selectHasMore,
  selectPage,
} from '../../redux/campers/selectors';

import Filters from '../../components/catalog/Filters/Filters';
import CamperList from '../../components/catalog/CamperList/CamperList';
import Loader from '../../components/shared/Loader/Loader';
import LoadMore from '../../components/catalog/LoadMore/LoadMore';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(
      fetchCampers({
        page: 1,
        limit: 4,
      })
    );
  }, [dispatch]);

  console.log(campers);

  const handleLoadMore = () => {
    const next = page + 1;

    dispatch(nextPage());

    dispatch(
      fetchCampers({
        page: next,
        limit: 4,
      })
    );
  };

  return (
    <main className={css.catalog}>
      <Filters />

      <section className={css.content}>
        {loading && <Loader />}

        {error && <p>{error}</p>}

        {!loading && !error && campers.length > 0 && (
          <>
            <CamperList />

            {hasMore && (
              <LoadMore
                onClick={() => {
                  handleLoadMore;
                }}
              />
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default CatalogPage;
