import './styles/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';


function NavBar() {
  const logo = "https://i.imgur.com/bDbANwY.png";
  
  return (
    <div className='header--container'>
      {/* logo  */}
      <div className='container--logo'>
        <img src={logo} alt=''/>
      </div>

      {/* Boton Menu */}
      <div className='menu--btn' id='menu'>
        <FontAwesomeIcon className='menu--icon' icon={faBars} color="white"/>
          <span>Menu</span>
      </div>

      {/* links de navegación */}
      <nav className='container--nav'>
        <ul className='nav--ul'>
          <li className='item'>
            <a href='*/'>Tienda</a>
          </li>
          <li className='item'>
            <a href='*/'>Nosotros</a>
          </li>
          <li className='item'>
            <a href='*/'>Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Cart Widget */}
      <CartWidget />
    </div>
  )
}

export default NavBar