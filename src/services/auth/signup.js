import React from "react";
import { BrowserRouter as Route,Routes,Link } from "react-router-dom";
import { signupAction } from "../../redux/actions/authactions/signupAction";

const Signup=()=>{

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

const signup = (e) => {
  e.preventDefault()
  const isValidated = validate();
  if (isValidated) {
    dispatch(signupAction(values, history)
    )
  }
}  


return(
<>

    <div className="container">
    <div className="w-75 mx-auto shadow p-5 mt-5">
      <h2 className="text-center mb-4">Sign up</h2>
      <form>
        <div className="form-group">
          
{/*  Email input  */}
<div className="form-outline mb-4 mt-4">
  <input type="email" id="email" className="form-control" placeholder="Enetr Your Email.." />
  <label className="form-label" for="email">Email address</label>
</div>

{/* < Password input */}
<div className="form-outline mb-4">
  <input type="password" id="pasword" className="form-control" placeholder="Enetr Your Password.." />
  <label className="form-label" for="paswoord">Password</label>
</div>

<div className="row mb-4">
  <div className="col d-flex justify-content-center">

  </div>
</div>
{/* 
<Submit button  */}
<button type="button" className="btn btn-primary btn-block mb-4" onClick={signup}>Register</button>

        </div>
    </form>
    </div>
  </div>
    
     </>);

}
export default Signup;