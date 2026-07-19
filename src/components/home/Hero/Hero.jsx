import { Link } from 'react-router-dom';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Campers of your dreams</h1>

            <p className={styles.subtitle}>
              You can find everything you want in our catalog
            </p>

            <Link to="/catalog">
              <Button variant="primary" size="hero">
                View Now
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
