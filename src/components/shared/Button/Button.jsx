import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ children, variant = 'primary', size, ...props }) => {
  return (
    <button
      className={clsx(css.button, css[variant], size && css[size])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
