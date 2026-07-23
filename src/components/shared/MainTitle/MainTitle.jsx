import css from './MainTitle.module.css';

const MainTitle = ({ children, className = '' }) => {
  return <h1 className={`${css.title} ${className}`}>{children}</h1>;
};

export default MainTitle;
