import ItemCount from './ItemCount';
import './styles/Item.scss';

const ItemDetail = ({name, price, description, src}) => {
  
  function onAdd() {
    alert('Ahora solo falta que la tomes')
  }

  return (
    <section className='product--card'>
      <span className='card--price'>${price}</span>
      <img className='card--img' src={src} alt=""/>

      <h2 className='card--name'>{name}</h2>
      <p className='card--description'>{description}</p>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </section>
  )
}

export default ItemDetail