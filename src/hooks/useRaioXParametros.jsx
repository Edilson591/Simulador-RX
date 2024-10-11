import {
  createContext,
  useContext,
  useReducer,
} from "react";

const RaioXContext = createContext();

const initialState = {
  kvp: 70,
  ma: 200,
  mas: 10,
};

const calculeStep = (type, value) => {
  switch (type) {
    case "kvp":
      if (value >= 45 && value < 70) return 3;
      if (value >= 70 && value < 120) return 4;
      return 1;
    case "ma":
      if (value >= 0 && value <= 100) return 20;
      if (value > 100) return 100;
      return 1;
    case "mas":
      if (value >= 0 && value < 10) return 2;
      if (value >= 10 && value < 50) return 10;
      if (value >= 50) return 20;
      return 1;
    default:
      return 1;
  }
};

const reducer = (state, action) => {
  let step = 0;

  switch (action.type) {
    case "INCREASE_KVP":
      step = calculeStep("kvp", state.kvp);
      return {
        ...state,
        kvp: Math.min(120, state.kvp + step),
      };
    case "DECREASE_KVP":
      step = calculeStep("kvp", state.kvp);
      return {
        ...state,
        kvp: Math.max(45, state.kvp - step),
      };
    case "INCREASE_MA":
      step = calculeStep("ma", state.ma);
      return {
        ...state,
        ma: Math.min(500, state.ma + step),
      };
    case "DECREASE_MA":
      step = calculeStep("ma", state.ma);
      return {
        ...state,
        ma: Math.max(50, state.ma - step),
      };
    case "INCREASE_MAS":
      step = calculeStep("mas", state.mas);
      return {
        ...state,
        mas: Math.min(100, state.mas + step),
      };
    case "DECREASE_MAS":
      step = calculeStep("mas", state.mas)
      return {
        ...state,
        mas: Math.max(2, state.mas - step),
      };
    case "RESET":
      return {
        ...state,
        kvp: action.newState.kvp,
        ma: action.newState.ma,
        mas: action.newState.mas,
      };
    default:
      return state;
  }
};

export const RaioXParametrosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RaioXContext.Provider value={{ state, dispatch }}>
      {children}
    </RaioXContext.Provider>
  );
};

export const RaioXParametros = () => {
  return useContext(RaioXContext);
};
