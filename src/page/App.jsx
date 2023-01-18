import "../styles/App.css";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import QuestionForm from "../components/QuestionForm";
import Modal from "../components/Modal";

import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="App">
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
      <QuestionForm />
      <Modal show={show} setShow={setShow} />
    </div>
  );
}

export default App;
