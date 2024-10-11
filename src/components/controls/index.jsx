import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { RaioXParametros } from "../../hooks/useRaioXParametros";
import { useViability } from "../../hooks/useViability";


function ConsolePrincipal({ onIncrease, reset }) {
  const { state, dispatch } = RaioXParametros()
  const { kvp, ma, mas } = useViability();

  useEffect(() => {
    
    onIncrease(state.kvp);
    onIncrease(state.ma);
    onIncrease(state.mas);

  }, [state, onIncrease]);

  useEffect(() => {
    if (reset) {
      const resetOn = { 
        type: "RESET",
        newState: {
          kvp: kvp,
          ma: ma,
          mas: mas
        }
      }
      dispatch(resetOn);
    }
  }, [reset,kvp,ma,mas]);

  const handleChange = (type,action) => {
    dispatch({type: `${type}_${action}`})
  }


  return (
    <S.ContainerControl>
      <div className="control-painel">
        <div className="control-title">
          <h2>KVP</h2>
        </div>
        <div className="container-control">
          <button onClick={() => handleChange("INCREASE","KVP")} aria-label="Increase kV">+</button>
          <span className="control-name">{state.kvp} kV</span>
          <button onClick={() => handleChange("DECREASE","KVP")} aria-label="Decrease kV">-</button>
        </div>
      </div>
      <div className="control-painel">
        <div className="control-title">
          <h2>MAS</h2>
        </div>
        <div className="container-control">
          <button onClick={() => handleChange("INCREASE","MAS")} aria-label="Increase MAS">+</button>
          <span className="control-name">{state.mas} MAS</span>
          <button onClick={() => handleChange("DECREASE","MAS")} aria-label="Decrease MAS">-</button>
        </div>
      </div>
      <div className="control-painel">
        <div className="control-title">
          <h2>MA</h2>
        </div>
        <div className="container-control">
          <button onClick={() => handleChange("INCREASE","MA")} aria-label="Increase MA">+</button>
          <span className="control-name">{state.ma} MA</span>
          <button onClick={() => handleChange("DECREASE","MA")} aria-label="Decrease MA">-</button>
        </div>
      </div>
    </S.ContainerControl>
  );
}

export default ConsolePrincipal;
