import { createContext, useContext, useState } from "react";
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, } from 'firebase/firestore';
import Swal from "sweetalert2";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [dataForm, setDataForm ] = useState({name: '' , email: '', phone: '', address: ''});

  const isInCart = (id) => {
    return cartList.some(e => e.id === id);
  }

  const addItem = (Item) => {

    if (isInCart(Item.id)) {
      let i = cartList.findIndex(e => e.id === Item.id);
      const newCartList = cartList;
      newCartList[i].qty += Item.qty;
      setCartList(newCartList);

    } else {
      setCartList([
        ...cartList,
        Item
      ])
    }

  }

  const clearCart = () => {
    setCartList([]);
  }

  const removeItem = (id) => {
    setCartList(cartList.filter(e => e.id !== id))
  }

  const totalAmount = () => {
    return cartList.reduce((count, e) => count += e.qty, 0)
  }
  
  const totalPrice = () => {
    return cartList.reduce((count, e) => count + (e.qty * e.price), 0)
  }

  async function createOrder(e) {
    e.preventDefault()
    let order = {}

    order.buyer = dataForm
    order.total = totalPrice()

    order.items = cartList.map(e => {
        return {
            product: e.id,
            name: e.name,
            price: e.price * e.qty,
            quantity: e.qty
        }
    })
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then(res => {
      Swal.fire({
        icon: "success",
        title: dataForm.name,
        text: `Su código de compra es: ${res.id}`,
        showConfirmButton: false,
        timer: 2000
      })
    })
        .catch(err => console.log(err))
        .finally(() => clearCart())


    const queryCollectionStock = collection(db, 'productos')
    const queryUpdateStock = await query(
        queryCollectionStock,
        where(documentId(), 'in', cartList.map(e => e.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
        .then(resp => { resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(e => e.id === res.id).qty })) })
        .catch(err => console.log(err))
        .finally(() => batch.commit())

   
  }

  const fillOutForm = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value        
    })
}
  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      clearCart,
      removeItem,
      totalAmount,
      totalPrice,
      createOrder,
      fillOutForm
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider