import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className={`${styles.navigation}`}>
          <div>
              <img  className={`${styles.logo}`} src="./images/logo.png" alt="logo" />
          </div>
          <div>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </div>
      </nav>
    </div>
  )
}
export default Navbar