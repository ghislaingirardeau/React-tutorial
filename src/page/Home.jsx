import "../styles/App.css";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import Modal from "../components/Modal";

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export function sum(a, b) {
  return a + b;
}

function App() {
  const [cart, updateCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState({}); // for the modal
  const test = useOutletContext();
  console.log(test);

  // add a scroll on mount
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <div className="App">
      <ScrollToTopOnMount />
      <Cart
        cart={cart}
        updateCart={updateCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ShoppingList
        cart={cart}
        updateCart={updateCart}
        setIsOpen={setIsOpen}
        setShow={setShow}
      />
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
