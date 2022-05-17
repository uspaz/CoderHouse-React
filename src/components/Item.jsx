import './styles/Item.scss';

const Item = ({name, src}) => {

  return (
    <section className='product--card'>
      <img className='card--img' src={src} alt=""/>
      <h2 className='card--name'>{name}</h2>
      <button className='card--btn'>Detalles del producto</button>
    </section>
  )
}

export default Item