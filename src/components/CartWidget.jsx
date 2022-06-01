import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

function CartWidget() {
  const { totalAmount } = useCartContext();


  return (
    <div className="cart-widget">
      <Link to='/cart'>
        <FontAwesomeIcon icon={faBeer} size="2x" color="white" style={{ cursor: 'pointer'}}/>
      </Link>
      <span className='total--amount'> { totalAmount() } </span>

    </div>
  );
}
export default CartWidget