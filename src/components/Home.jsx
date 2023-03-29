import React from "react";

function Home(props) {
  console.warn("home", props.cardData);
  return (
    <div className="cards">
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://i02.appmifile.com/109_operator_sg/23/08/2021/45d16ff368ca5f24dfa8f66d9238cb71.png"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Price: Rs.55,999</span>
        </div>
        <div className="button-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({
                price: 55999,
                name: "Xiomi Notebook Pro",
              })
            }
            className="button-5"
          >
            Add To Cart
          </button>
          <button
            onClick={() =>
              props.removeFromCartHandler({
                price: 55999,
                name: "Xiomi Notebook Pro",
              })
            }
            className="button-5"
            style={{ backgroundColor: "#cb2323" }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
