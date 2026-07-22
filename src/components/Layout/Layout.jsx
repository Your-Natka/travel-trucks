import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
