import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-item"]}>
      {[{ id: "c1", name: "paneer tikka", amount: 2, price: 12.98 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <div>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};