import React from "react";
import { useState } from "react";
import * as S from "./styles";
import Input from "../input";

function Modal() {
  const [values,setValues] = useState({namePacient:""})



  function onChange(event) {
    const {name, value} = event.target

    setValues({
      ...values,
      [name]:value,
    });
  }

  console.log(values)
  return (
    <S.ContainerModal>
      <div className="modal">
        <h2 className="information-add">
          Introduza as informações necessarias
        </h2>
        <form action="">
          <div className="infors-input">
            <div className="validPatient">
              <label htmlFor="namePacient">Nome:</label>
              <Input
                type="text"
                placeholder="Digite o nome do paciente"
                name="namePacient"
                id="namePacient"
                value={values.namePacient}
                onChange={onChange}
              />
            </div>
            <div className="anonyPatient">
              <label htmlFor="pacientNotInfo">Ignorar</label>
              <input type="checkbox" id="pacientNotInfo" />
            </div>
          </div>
          
        </form>
      </div>
    </S.ContainerModal>
  );
}

export default Modal;
