import "../styles/cart.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Cart({ cart, isOpen, setIsOpen, updateCart, test }) {
  console.log(test);

  const total =
    cart.length > 0
      ? cart.reduce(
          (accumulator, plant) => accumulator + plant.price * plant.quantity,
          0
        )
      : 0;

  // POUR LE 1ER RENDU : ex appel API
  /* useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, []); */

  // POUR LA MISE A JOUR D'ELEMENT : ici par exemple total
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

  // A CHAQUE RENDU DU COMPOSANT
  /* useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }); */

  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      {cart.map(({ id, name, price, quantity }) => (
        <div key={id}>
          name: {name}, price: {price}, quantity: {quantity}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider panier</button>
    </div>
  ) : (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  updateCart: PropTypes.func,
};
Cart.defaultProps = {
  test: "my default props",
};

export default Cart;
