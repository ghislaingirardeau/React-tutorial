import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import CareScale from "./CareScale";
import "../styles/plantCard.css";
import photo from "../assets/leaf+1.png";

const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    isBestSale: true,
    light: 1,
    water: 1,
    img: photo,
    price: 15,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ed",
    isBestSale: false,
    light: 1,
    water: 2,
    img: photo,
    price: 18,
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: "3ed",
    isBestSale: true,
    light: 3,
    water: 1,
    img: photo,
    price: 17,
  },
  {
    name: "yucca",
    category: "classique",
    id: "4ed",
    isBestSale: false,
    light: 1,
    water: 3,
    img: photo,
    price: 11,
  },
  {
    name: "palmier",
    category: "classique",
    id: "5ed",
    isBestSale: true,
    light: 3,
    water: 2,
    img: photo,
    price: 12,
  },
  {
    name: "Orchidée",
    category: "classique",
    id: "6ed",
    isBestSale: true,
    light: 3,
    water: 2,
    img: photo,
    price: 16,
  },
];

// condition : mettre null si on ne veut rien afficher dans le ou
function ShoppingList({ cart, updateCart, setIsOpen, setShow }) {
  const showModalImg = (img, name) => {
    setShow({ img, name });
  };

  const isBestSale = (params) => {
    if (params) {
      return <span>🔥</span>;
    } else {
      return <span>👎</span>;
    }
  };

  const addToCart = (id, name, price) => {
    setIsOpen(true);

    const plantAdded = cart.filter((element) => id === element.id);
    if (plantAdded.length === 0) {
      updateCart([...cart, { id, price, name, quantity: 1 }]);
    } else {
      plantAdded[0].quantity++;
      updateCart([
        ...cart.filter((element) => id !== element.id),
        ...plantAdded,
      ]);
    }
  };

  return (
    <div className="plant-container">
      {plantList.map((plant, index) => (
        <div key={`${plant.id}`} className="plant-cards">
          <h3>{plant.name}</h3>
          <img
            src={plant.img}
            alt="La maison jungle"
            className="lmj-logo"
            onClick={() => {
              showModalImg(plant.img, plant.name);
            }}
          />
          <p>{isBestSale(plant.isBestSale)}</p>
          <span>Price: {plant.price}€</span>
          <CareScale careType="water" scaleValue={plant.water} />
          {/* // pass props inside components */}
          <CareScale careType="light" scaleValue={plant.light} />

          <Button
            variant="primary"
            onClick={() => addToCart(plant.id, plant.name, plant.price)}
          >
            Add
          </Button>
        </div>
      ))}
    </div>
  );
}

//cart, updateCart, setIsOpen, setShow
ShoppingList.propTypes = {
  setIsOpen: PropTypes.func,
  setShow: PropTypes.func,
  cart: PropTypes.array,
  updateCart: PropTypes.func,
};

export default ShoppingList;
