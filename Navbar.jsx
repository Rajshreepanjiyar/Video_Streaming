import { Link } from 'react-router-dom'
  // Optional: only if you create this CSS file

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Live Streaming</h2>

      <ul style={styles.ul}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/watch" style={styles.link}>Watch</Link>
        </li>
        <li>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li>
          <Link to="/register" style={styles.link}>Register</Link>
        </li>
        <li>
          <Link to="/admin" style={styles.link}>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#111',
  },
  logo: {
    color: '#fff',
    margin: 0,
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '16px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
}

export default Navbar
