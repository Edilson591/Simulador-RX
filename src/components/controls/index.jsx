import React, { useEffect, useReducer } from "react";
import * as S from "./styles";

const initialState = {
  kvp: 70,
  ma: 200,
  mas: 10,
};

function reducer(state, action) {
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
        mas: Math.max(2,state.mas - step),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function ConsolePrincipal({ kvp, onIncrease, onDecrease, onReset, reset }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, kvp });

  useEffect(() => {
    onIncrease(state.kvp);
  }, [state.kvp, onIncrease]);

  useEffect(() => {
    if (reset) {
      dispatch({ type: "RESET" });
      onReset(initialState.kvp);
    }
  }, [reset, onReset]);

  const handleIncreaseKvp = () => dispatch({ type: "INCREASE_KVP" });
  const handleDecreaseKvp = () => dispatch({ type: "DECREASE_KVP" });
  const handleIncreaseMa = () => dispatch({ type: "INCREASE_MA" });
  const handleDecreaseMa = () => dispatch({ type: "DECREASE_MA" });
  const handleIncreaseMas = () => dispatch({ type: "INCREASE_MAS" });
  const handleDecreaseMas = () => dispatch({ type: "DECREASE_MAS" });

  return (
    <S.ContainerControl>
      <div className="control-painel">
        <div className="control-title">
          <h2>KVP</h2>
        </div>
        <div className="container-control">
          <button onClick={handleIncreaseKvp} aria-label="Increase kV" aria-hidden="true">+</button>
          <span className="control-name">{state.kvp} kV</span>
          <button onClick={handleDecreaseKvp} aria-label="Decrease kV" aria-hidden="true">-</button>
        </div>
      </div>
      <div className="control-painel">
        <div className="control-title">
          <h2>MAS</h2>
        </div>
        <div className="container-control">
          <button onClick={handleIncreaseMas} aria-label="Increase MAS" aria-hidden="true">+</button>
          <span className="control-name">{state.mas} MAS</span>
          <button onClick={handleDecreaseMas} aria-label="Decrease MAS" aria-hidden="true">-</button>
        </div>
      </div>
      <div className="control-painel">
        <div className="control-title">
          <h2>MA</h2>
        </div>
        <div className="container-control">
          <button onClick={handleIncreaseMa} aria-label="Increase MA" aria-hidden="true">+</button>
          <span className="control-name">{state.ma} MA</span>
          <button onClick={handleDecreaseMa} aria-label="Decrease MA" aria-hidden="true">-</button>
        </div>
      </div>
    </S.ContainerControl>
  );
}

export default ConsolePrincipal;
