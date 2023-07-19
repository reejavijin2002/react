import React, { useState } from "react";
import "./form.css";

function Form(props) {
  console.log(props);

  const { myfun } = props;

  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');

  const submit = (params) => {
    params.preventDefault();

    myfun(email, password);
    
  };

  const emailValue = (params) => {
    // console.log(params.target.value.length);
    setemail(params.target.value);
  };

  const passwordValue = (params) => {
    // console.log(params.target.value);
    setpassword(params.target.value);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input onChange={emailValue} type="Email" placeholder="Email" />
        {
            email.length === 0 ? <span style={{color:'red'}}>this field is null</span> : ''
            // condition ? true : false
        }
        <input
          onChange={passwordValue}
          type="Password"
          placeholder="Password"
        />
        {
            password.length === 0 ? <span style={{color:'red'}}>this field is null</span> : ''
            // condition ? true : false
        }
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
