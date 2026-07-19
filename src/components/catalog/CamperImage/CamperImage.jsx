import css from './CamperImage.module.css';

const CamperImage = ({ image, name }) => {
  return <img src={image} alt={name} className={css.image} />;
};

export default CamperImage;
