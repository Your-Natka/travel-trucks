export const buildQueryParams = ({ page = 1, limit = 4, filters = {} }) => {
  const params = {
    page,
    limit,
  };

  if (filters.location && filters.location.trim()) {
    params.location = filters.location.trim();
  }

  if (filters.form) {
    params.form = filters.form;
  }

  if (filters.engine) {
    params.engine = filters.engine;
  }

  if (filters.transmission) {
    params.transmission = filters.transmission;
  }

  [
    'AC',
    'kitchen',
    'bathroom',
    'TV',
    'radio',
    'refrigerator',
    'microwave',
    'gas',
    'water',
  ].forEach(key => {
    if (filters[key]) {
      params[key] = true;
    }
  });

  return params;
};
