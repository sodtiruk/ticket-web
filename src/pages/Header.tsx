import { Link } from 'react-router-dom';
import { PATHS } from '../constants/paths';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>
          <Link to="/" style={styles.logoLink}>MyWebsite</Link>
        </h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to={PATHS.HOME} style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to={PATHS.ABOUT} style={styles.navLink}>About</Link>
            </li>
            <li style={styles.navItem}>
              <Link to={PATHS.CONTACT} style={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    margin: 0,
    fontSize: '24px',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
