import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Routes, Link } from "react-router-dom";
import { loginAction } from "../../redux/actions/authactions/loginAction";

const Login=({history})=>{

  const intialaState={
    email: "",
    password:""
  };

const [user, setuser] = useState(intialaState);
const [errors, setErrors] = useState({});
const dispatch = useDispatch();

const validate = () => {
  let errors = {};
  if (!user.email) {
    errors.email = t('Email address is required.trans');
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = t('Email address is invalid.trans');
  }
  if (!user.password) {
    errors.password = t('Password is required.trans');
  }
  setErrors(errors)
  return !Object.keys(errors)?.length;
};

const login = (e) => {
  e.preventDefault()
  const isValidated = validate();
  if (isValidated) {
    dispatch(loginAction(values, history)
    )
  }
}

// const onSubmit=async()=>{
// let result=await axios.post("http://localhost:3003/signup",user);
// console.log(result);
// }


  const { email,password } = user;
  const onInputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={e=>login(e)}>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Password"
              name="pass"
              value={password}
              onChange={e => onInputChange(e)}
            />
          </div>
   {/* {console.log("email is"+dbuser)} */}

          <button className="btn btn-primary btn-block mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;