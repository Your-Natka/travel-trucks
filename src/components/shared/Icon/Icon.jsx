import sprites from '../../../assets/icons/sprites.svg';

const Icon = ({ name, width = 20, height = 20, className = '' }) => {
  return (
    <svg width={width} height={height} className={className} aria-hidden="true">
      <use href={`${sprites}#${name}`} />
    </svg>
  );
};

export default Icon;
