import css from './SectionTitle.module.css';

const SectionTitle = ({ children, className = '' }) => {
  return <p className={`${css.title} ${className}`}>{children}</p>;
};

export default SectionTitle;
