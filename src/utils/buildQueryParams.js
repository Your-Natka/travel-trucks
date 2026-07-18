export const buildQueryParams = ({ page = 1, limit = 4, filters = {} }) => {
  const params = {
    page,
    limit,
  };

  Object.entries(filters).forEach(([key, value]) => {
    // пропускаємо порожні значення
    if (
      value === "" ||
      value === false ||
      value === null ||
      value === undefined
    ) {
      return;
    }

    params[key] = value;
  });

  return params;
};
