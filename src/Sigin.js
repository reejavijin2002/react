import React from "react";


function Signup() {
    return (
      <form className="">
        <div className="">
          <input type="text" placeholder="New Login ID" />
        </div>
        <div className="">
          <input type="password" placeholder="New Password" />
        </div>
        <div className="">
          <input type="password" placeholder="Re-Enter Password" />
        </div>
        <div className="">
          <button type="button">Sign Up</button>
        </div>
      </form>
    );
  }
  
  export default Signup;