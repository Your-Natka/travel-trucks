import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors";

import Filters from "../../components/catalog/Filters/Filters";
import CamperList from "../../components/catalog/CamperList/CamperList";
import Loader from "../../components/shared/Loader/Loader";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main className={css.catalog}>
      <Filters />

      <section className={css.content}>
        {loading && <Loader />}

        {error && <p>{error}</p>}

        {!loading && !error && <CamperList campers={campers} />}
      </section>
    </main>
  );
};

export default CatalogPage;
