import React, { useContext, useState, useEffect } from "react";
import { PacientContext } from "../../hooks/pacientContext";
import Modal from "react-modal";
import Input from "../input";
import OptionSelect from "../Input Select";
import Button from "../Button";
import "./styles.css";

Modal.setAppElement("#root");

function ElementModal({ onCloseModal, isOpen }) {
  const [values, setValues] = useState({ namePacient: "" });
  const [isTouch, setIsTouch] = useState(false);
  const [error, setError] = useState('');
  const [valueSelectPosition, setSelectValuePosition] = useState("");
  const [valueSelectBiotype, setSelectValueBiotype] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { setNamePacient, setPositionPacient, setBiotype } = useContext(PacientContext);

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  function resetForm() {
    setValues({ namePacient: "" });
    setSelectValuePosition("");
    setSelectValueBiotype("");
    setIsDisabled(false);
    setIsTouch(false);
    setError('');
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleBlur() {
    setIsTouch(true);
    validateName();
  }

  function validateName() {
    const trimmedName = values.namePacient.trim();
    if (trimmedName === '') {
      setError("Campo obrigatório");
    } else {
      setError('');
    }
  }

  function closeModal() {
    if (isFormValid()) {
      setPositionPacient(valueSelectPosition);
      setBiotype(valueSelectBiotype);
      setNamePacient(values.namePacient);
      onCloseModal(values.namePacient || "Anônimo", valueSelectPosition);
      setIsDisabled(false);
    } else {
      alert("Digite todas as informações necessárias corretamente");
    }
  }

  function isFormValid() {
    return values.namePacient.trim() !== "" && 
           (isDisabled || (valueSelectPosition.length > 1 && valueSelectBiotype.length > 1));
  }

  const handleCheckbox = () => {
    setNamePacient("Anônimo");
    setValues({ namePacient: "" });
    setIsDisabled(prevState => !prevState);
    setError('');
  };

  const handleChangeSelectPosition = (select) => {
    setSelectValuePosition(select.value);
  };

  const handleChangeSelectBiotype = (select) => {
    setSelectValueBiotype(select.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Formulário do paciente"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal">
        <h2 className="information-add">Introduza as informações necessárias</h2>
        <form>
          <div className="infors-input">
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
                {isTouch && error && <span className="error-message">{error}</span>}
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
            />
            <OptionSelect
              value={valueSelectBiotype}
              onChange={handleChangeSelectBiotype}
              label="Escolha um tipo de corpo: "
              options="biotipo"
              classNamePrefix="Select"
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
  );
}

export default ElementModal;
