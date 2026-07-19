import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from '../../components/shared/Loader/Loader';
import VehicleDetails from '../../components/details/VehicleDetails/VehicleDetails';

import { fetchCamperById } from '../../redux/campers/operations';
import { selectCamper, selectLoading } from '../../redux/campers/selectors';

const CamperPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (loading || !camper) {
    return <Loader />;
  }

  return <VehicleDetails camper={camper} />;
};

export default CamperPage;
