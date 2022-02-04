import React from "react";
import "./Developer.css";
import Terminal from "../../assests/terminal.png";

const Developers = () => {
  return (
    <div className="developer">
      <div className="container">
        <div className="left">
          <h2>Superpowers for DEFI Developers.</h2>
          <p>
            Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start </span>or a guide below to
            integrate your project with thousands of tokens and billions in
            liquidity.
          </p>
        </div>
        <div className="right">
            <div className="image-container">
                <img src={Terminal} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
