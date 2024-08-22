import React, { useContext, useState } from "react";
import { PacientContext } from "../../hooks/pacientContext";
import Modal from "react-modal";
import Input from "../input";
import OptionSelect from "../Input Select";
import Button from "../Button";
import "./styles.css";

Modal.setAppElement("#root");

function ElementModal({ onCloseModal, isOpen = true}) {
  const [localIsOpen,setLocalIsOpen] = useState(isOpen);
  const [values, setValues] = useState({ namePacient: "" });
  const [isTouch, setIsTouch] = useState(false);
  const [error, setError] = useState('');
  const [valueSelectPosition, setSelectValuePosition] = useState("");
  const [valueSelectBiotype, setSelectValueBiotype] = useState("");
  const [modalIsOpen, setIsOpen] = useState(true);
  const [isDisabled, setIsDisable] = useState(false);
  const {namePacient,
    setNamePacient,
    setPositionPacient,
    biotype,
    setBiotype} = useContext(PacientContext);
 

  function onChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleBlur() {
    setisTouch(true);
    const newValue = values.namePacient.trim()
    if(newValue === ''){
      setError("Requerid")
    }else {
      setError('')
    }
  }

  function closeModal() {
    if(values.namePacient.trim() === "" && !isDisabled) {
      // handleBlur()
      return alert("Digite todas as informações necessarias corretamente")
    }
    if (values.namePacient.length > 2 || isDisabled) {
      if(valueSelectPosition.length > 1 &&
        valueSelectBiotype.length > 1 ){
          setPositionPacient(valueSelectPosition);
          setBiotype(valueSelectBiotype);
          setNamePacient(values.namePacient);
          onCloseModal(values.namePacient || "Anônimo",valueSelectPosition);
          setIsOpen(false);
        }else {
          return alert("Digite todas as informações necessarias corretamente")
        }
    }

    
  }
  const handleCheckbox = () => {
    setNamePacient("Anônimo");
    setValues({ namePacient: "" })
    setIsDisable(!isDisabled);
    setError(false);
    setError('');
  };

  const handleChangeSelectPosition = (select) => {
    setSelectValuePosition(select.value);
  };

  const handleChangeSelectBiotype = (select) => {
    setSelectValueBiotype(select.value);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="formulario do paciente"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal">
          <h2 className="information-add">
            Introduza as informações necessarias
          </h2>
          <form action="">
            <div
            className="infors-input">
              <div className="optionName">
                <div className="validPatient">
                  <label htmlFor="namePacient">Nome:</label>
                  <Input
                    type="text"
                    placeholder="Digite o nome do paciente"
                    name="namePacient"
                    id="namePacient"
                    disabled={isDisabled}
                    value={values.namePacient}
                    onChange={onChange}
                    onBlur={handleBlur}
                    className={isTouch && error ? 'invalid' : 'notInvalid'}
                    />
                    {isTouch && error ? <span style={{ color: 'red', fontSize: '12px' }}>campo obrigatório</span> :''}
                </div>
                <div className="anonyPatient">
                  <label htmlFor="pacientNotInfo">Ignorar</label>
                  <input
                    type="checkbox"
                    id="pacientNotInfo"
                    onChange={handleCheckbox}
                    checked={isDisabled}
                  />
                </div>
              </div>
              <OptionSelect 
              value={valueSelectPosition}
              onChange={handleChangeSelectPosition}
              label="Escolha uma posição: "
              options="position"
              classNamePrefix="Select" 
              onBlur={handleBlur}
              className={isTouch && error ? 'invalid' : 'notInvalid'}/>
              <OptionSelect
              value={valueSelectBiotype}
              onChange={handleChangeSelectBiotype}
              label="Escolha um tipo de corpo: "
              options="biotipo"
              classNamePrefix="Select"
              onBlur={handleBlur}
              className={isTouch && error ? 'invalid' : 'notInvalid'}
              />
            </div>
          </form>
          <Button
            onClick={closeModal}
            Type="button"
            Text="Verificar informações"
            className="button-modal"
          />
        </div>
      </Modal>
    </>
  );
}

export default ElementModal;
