export const formatLocation = location => {
  const [country, city] = location.split(',');

  return `${city.trim()}, ${country.trim()}`;
};
