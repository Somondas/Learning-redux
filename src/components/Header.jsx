import React from "react";

function Header(props) {
  console.warn("home", props.cardData);
  return (
    <div className="cards">
      <div className="add-to-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1972/1972381.png"
          alt=""
        />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#000",
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          {props.cardData.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
