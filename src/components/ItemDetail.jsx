import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import Confirm from './Confirm';
import ItemCount from './ItemCount';
import './styles/ItemDetail.scss';

const ItemDetail = ({item}) => {
  
  const [type, setType] = useState('ItemCount');
  const { addItem } = useCartContext();
  const {name, price, src, description} = item;

  const onAdd = (qty) =>{
    setType('Confirm')
    addItem({...item, qty})
  }

  return (
    <section className='product--card-detail'>
      <div className='section--img'>
        <span className='card--price'>${price}</span>
        <img className='card--img' src={src} alt=""/>
      </div>
      
      <div className='section--data'>
        <h2 className='card--name'>{name}</h2>
        <p className='card--description'>{description}</p>
        {
          type === 'ItemCount' ?
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            :
            <Confirm />      
        }
      </div>
    </section>
  )
}

export default ItemDetail