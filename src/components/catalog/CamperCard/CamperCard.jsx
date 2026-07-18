const CamperCard = ({ camper }) => {
  return (
    <article>
      <h2>{camper.name}</h2>

      <p>{camper.location}</p>

      <p>{camper.price}</p>
    </article>
  );
};

export default CamperCard;
