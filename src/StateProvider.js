import react, { createContext, useState, useReducer, useContext } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the app layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);
