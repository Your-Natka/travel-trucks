import { axiosInstance } from './axiosInstance';
import { mapCamper } from './mapper';

export const getCampers = async params => {
  const { data } = await axiosInstance.get('/campers', {
    params,
  });

  return {
    ...data,
    items: data.items.map(mapCamper),
  };
};
