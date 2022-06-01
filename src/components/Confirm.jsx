import './styles/ItemCount.scss'
import { Link } from 'react-router-dom'

function Confirmacion() {
  return (
    <div className="card--counter">
      <Link to='/cart'>
        <button className='card--btn-second'>
          Finalizar Compra
        </button>
      </Link>
    </div>
  )
}

export default Confirmacion