import Item from "./Item";
import './styles/ItemList.scss';

const ItemList = ({products}) => {
  

  return (
    <div className="container--items">
      <h2 className="items--title">Lista de productos</h2>

      {products.map( (product) => {
        return (
          <div key={product.id}>
            <Item name={product.name} price={product.price} src={product.src}/>
          </div>
        );
      })
      }
    </div>
  )
}

export default ItemList