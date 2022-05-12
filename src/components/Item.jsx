import ItemCount from './ItemCount';
import './styles/Item.scss';

const Item = ({name, price, src}) => {

  function onAdd() {
    alert('Ahora solo falta que la tomes')
  }

  return (
    <section className='product--card'>
      <span className='card--price'>${price}</span>
      <img className='card--img' src={src} alt=""/>

      <h2 className='card--name'>{name}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </section>
  )
}

export default Item