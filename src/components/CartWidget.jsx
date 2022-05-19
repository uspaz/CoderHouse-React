import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import './styles/CartWidget.scss';
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <div className="cart-widget">
      <Link to='/cart'>
        <FontAwesomeIcon icon={faBeer} size="2x" color="white" />
      </Link>
    </div>
  );
}
export default CartWidget