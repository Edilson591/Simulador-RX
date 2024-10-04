import { createContext, useContext, useEffect, useReducer, useState} from "react";
import { useViability } from "./useViability";

const RaioXContext = createContext();

const initialState = {
  kvp: 70,
  ma: 200,
  mas: 10,
};

const reducer = (state, action) => {
  let step = 0;

  switch (action.type) {
    case "INCREASE_KVP":
      if (state.kvp >= 45 && state.kvp < 70) {
        step = 3;
      } else if (state.kvp >= 70 && state.kvp < 120) {
        step = 4;
      }
      if (state.kvp + step > 120) {
        return state;
      }
      return {
        ...state,
        kvp: state.kvp + step,
      };
    case "DECREASE_KVP":
      if (state.kvp >= 45 && state.kvp < 70) {
        step = 3;
      } else if (state.kvp >= 70 && state.kvp <= 120) {
        step = 4;
      }
      return {
        ...state,
        kvp: Math.max(45, state.kvp - step),
      };
    case "INCREASE_MA":
      if (state.ma >= 0 && state.ma <= 100) {
        step = 20;
      } else if (state.ma > 100) {
        step = 100;
      }
      if (state.ma + step > 500) {
        return state;
      }
      return {
        ...state,
        ma: state.ma + step,
      };
    case "DECREASE_MA":
      if (state.ma >= 0 && state.ma <= 100) {
        step = 20;
      } else if (state.ma > 100) {
        step = 100;
      }
      return {
        ...state,
        ma: Math.max(50, state.ma - step),
      };
    case "INCREASE_MAS":
      if (state.mas >= 0 && state.mas < 10) {
        step = 2;
      } else if (state.mas >= 10 && state.mas < 50) {
        step = 10;
      } else if (state.mas >= 50) {
        step = 20;
      }
      if (state.mas + step > 110) {
        return state;
      }
      return {
        ...state,
        mas: state.mas + step,
      };
    case "DECREASE_MAS":
      if (state.mas >= 0 && state.mas < 10) {
        step = 2;
      } else if (state.mas >= 10 && state.mas <= 50) {
        step = 10;
      } else if (state.mas > 50) {
        step = 20;
      }
      return {
        ...state,
        mas: Math.max(2, state.mas - step),
      };
    case "RESET":
      return {
        ...state,
        kvp: action.newState.kvp,
        ma: action.newState.ma,
        mas: action.newState.mas
      };
    default:
      return state;
  }
};

export const RaioXParametrosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  




  return (
    <RaioXContext.Provider value={{ state, dispatch}}>
      {children}
    </RaioXContext.Provider>
  );
};

export const RaioXParametros = () => {
  return useContext(RaioXContext);
};
