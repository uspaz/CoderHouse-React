import ItemCount from './ItemCount'
import './styles/ItemListContainer.scss'

const ItemListContainer = () => {
  function onAdd() {
    alert('Ahora solo falta que la tomes')
  }

  return (
    <div>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer