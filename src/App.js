import Cart from "./Components/Cart";
import React, { useReducer } from "react";
import Login from "./Components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

export const TaskContext = React.createContext();

const promise = loadStripe(
  "pk_test_51Lu8bpSA9QZCv9ATFadEFmPAsQ6zQusetynE1OGSEAHdF4xi5yd5Eh6JSnJfYqWHVjB9SFIuDshns0eUN1e9B2Tr00SCuLXfQt"
);

function App() {
  

  function reducer(state, action) {
    if (action.type === "ADD_ITEM") {
      // Adding new item
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    } else if (action.type === "REMOVE_ITEM") {
      // Removing item

      return {
        ...state,
        items: action.payload,
        total: state.total - action.deduced,
      };
    } else if (action.type === "ADD_EXISTING_ITEM") {

      const i = state.items.filter((el) => el.name === action.payload.name);
      const index = state.items.indexOf(i[0]);
      state.items.splice(index, 1, action.payload);

      return {
        ...state,
        total: state.total + action.payload.price,
      };
    } 
    
    else if(action.type === "REMOVE_DUPLICATE_ITEM"){ // Remove duplicate item
      const i = state.items.filter((elem)=> elem.name === action.payload.name)
      const index = state.items.indexOf(i[0]);
      state.items.splice(index, 1, action.payload);

      return {
        ...state,
        total: state.total - action.payload.price,
      };
    
   }
    
    else if (action.type === "SET_USER") {
      // Setting user

      return { ...state, user: action.logIn };
    } else {
      return state;
    }
  }
  const states = {
    items: [],
    total: 0,
    user: null,
  };

  const [state, dispatch] = useReducer(reducer, states);

  function addItem(name, price, image) {
    const exist = state.items.filter((prod) => {
      return prod.name === name;
    });

    if (exist.length === 0) {
      const quantity = 1;
      const item = {
        name,
        price,
        image,
        quantity,
        id: new Date().getTime().toString(),
      };
      dispatch({ type: "ADD_ITEM", payload: item });
    } else {
      const q = state.items.filter((p) => name === p.name);
      const quantity = q[0].quantity + 1;
      const item = {
        name,
        price,
        image,
        quantity,
        id: new Date().getTime().toString(),
      };

      dispatch({ type: "ADD_EXISTING_ITEM", payload: item });
    }
  }

  function removeItem(name, price, image) {
    const prod = state.items.filter((elem) => elem.image === image);
    const prodQuantity = prod[0].quantity

    if(prodQuantity > 1){
      
      const replaceAble = { name, price, image, quantity:prodQuantity-1 ,id: new Date().getTime().toString() }
      dispatch({ type:"REMOVE_DUPLICATE_ITEM", payload:replaceAble })
    } else {
      const newList = state.items.filter((elem)=> elem.name !== name);
      dispatch( {type: "REMOVE_ITEM" , payload:newList, deduced: prod[0].price} )
    }

  }
  return (
    <TaskContext.Provider value={{ addItem, state, removeItem }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>

            <Route
              path="/cart"
              element={
                <Elements stripe={promise}>
                  <Cart />
                </Elements>
              }
            ></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </BrowserRouter>
    </TaskContext.Provider>
  );
}

export default App;
