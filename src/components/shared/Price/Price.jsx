const Price = ({ price }) => {
  return (
    <>
      €
      {Number(price).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </>
  );
};

export default Price;
