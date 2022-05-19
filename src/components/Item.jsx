import './styles/Item.scss';
import { Link } from 'react-router-dom';

const Item = ({name, src, id}) => {

  return (
    <section className='product--card'>
      <img className='card--img' src={src} alt=""/>
      <h2 className='card--name'>{name}</h2>
      <Link to={`/detail/${id}`}>
        <button className='card--btn'>Detalles del producto</button>
      </Link>
    </section>
  )
}

export default Item