import css from './BookingSuccess.module.css';

const TruckAnimation = () => {
  return (
    <div className={css.animation}>
      <svg className={css.truck} viewBox="0 0 48 24" width="140" height="70">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          transform="translate(0,2)"
        >
          <g className={css.body}>
            <polyline points="2 17,1 17,1 11,5 9,7 1,39 1,39 17" />

            <polyline points="39 17,31.5 17" />

            <polyline points="22.5 17,11 17" />

            <polyline points="6.5 4,8 4,8 9,5 9" />

            <polygon points="10 4,10 9,14 9,14 4" />
          </g>

          <g className={css.wheel} transform="translate(6.5 17)">
            <circle r="2.8" />
            <circle r="0.5" fill="currentColor" stroke="none" />

            <line x1="-2.3" y1="0" x2="2.3" y2="0" />
            <line x1="0" y1="-2.3" x2="0" y2="2.3" />
          </g>

          <g className={css.wheel} transform="translate(27 17)">
            <circle r="2.8" />
            <circle r="0.5" fill="currentColor" stroke="none" />

            <line x1="-2.3" y1="0" x2="2.3" y2="0" />
            <line x1="0" y1="-2.3" x2="0" y2="2.3" />
          </g>
        </g>
      </svg>

      <div className={css.smoke}></div>
      <div className={css.smoke2}></div>
      <div className={css.smoke3}></div>
      <div className={css.road}></div>
    </div>
  );
};

export default TruckAnimation;
