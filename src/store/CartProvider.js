import CartContext from "./cart-context";
const CartProvider = (props) => {
    const addItemHandler=item=>{};
    const removeItemHandler=id=>{};
    const cartContext={
        item:[],
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;