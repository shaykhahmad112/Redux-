import React, { createContext, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/AddtoCart";
import Login from "./services/auth/login";
import Signup from "./services/auth/signup";

function App() {
  // const inref=useRef();
  // const newcontext=createContext();
  // const handleInput=()=>{inref.current.value="1000"}
  return (
   
    // <newcontext.Provider>
    <div className="App">

    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/list" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route path="/addtocart" component={Cart}/>
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
    {/* <input type="text" ref={inref}/>
    <button onClick={handleInput}>click me</button> */}
    <h1>Hello World</h1>
    </div>
  //  </newcontext.Provider>

  );
}

export default App;
