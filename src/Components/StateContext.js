import React, { useReducer } from "react";

 const states = {
  items: [],
  total: 0,
  user: null,
};

 function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    return { items: [...state.items, action.payload] };
  } else if (action.type === "REMOVE_ITEM") {
    return { items: action.payload };
  } else {
    return state;
  }
}

 const [state, dispatch] = useReducer(reducer, states);

 function addItem({ name, price, image }) {
  const item = { name, price, image, id: new Date().getTime().toString() };
  dispatch({ type: "ADD_ITEM", payload: item });
}

 function removeItem(id) {
  const newList = state.items.filter((prod) => {
    return id !== prod.id;
  });
  dispatch({ type: "REMOVE_ITEM", payload: newList });
}

const StateContext = () => {
  return <div>StateContext</div>;
};

export default StateContext;
