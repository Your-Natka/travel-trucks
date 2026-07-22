import { axiosInstance } from './axiosInstance';
import { mapCamper } from './mapper';

export const getCampers = async params => {
  const { data } = await axiosInstance.get('/campers', {
    params,
  });

  return {
    ...data,
    page: params.page,
    items: data.items.map(mapCamper),
  };
};

export const getCamperById = async id => {
  const { data } = await axiosInstance.get(`/campers/${id}`);

  return mapCamper(data);
};
