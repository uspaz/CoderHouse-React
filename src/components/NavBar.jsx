import { Link } from 'react-router-dom';

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
            <Link to='/'> Tienda</Link>
          </li>
          <li className='item'>Categorias
            <ul className='item--category'>
              <li><Link to='/'>Cerveza</Link></li>
              <li><Link to='/'>Fernet</Link></li>
              <li><Link to='/'>Ron</Link></li>
              <li><Link to='/'>Tequila</Link></li>
              <li><Link to='/'>Whisky</Link></li>
            </ul>
          </li>
          <li className='item'>
            <a href='*/'>Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Cart Widget*/}
      <CartWidget />
    </div>
  )
}

export default NavBar