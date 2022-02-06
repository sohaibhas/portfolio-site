import React from "react";
import "./Subcribe.css";

const Subcribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our Defi Community</h2>
        <form action="">
          <div className="form-container display-col">
            <input type="email" name-="email" placeholder="Enter your Email" />
            <button className="btn" style={{fontsize:"20px"}}>Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>Yes, I agree to receive email communication from Defi.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subcribe;
