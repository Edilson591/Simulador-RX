import React, { useContext, useState, useEffect } from "react";
import { PacientContext } from "../../hooks/pacientContext";
import Modal from "react-modal";
import Input from "../input";
import OptionSelect from "../Input Select";
import Button from "../Button";
import "./styles.css";

Modal.setAppElement("#root");

function ElementModal({ onCloseModal, isOpen }) {
  const [localIsOpen, setLocalIsOpen] = useState(isOpen);
  const [values, setValues] = useState({ namePacient: "" });
  const [isTouch, setIsTouch] = useState(false);
  const [error, setError] = useState("");
  const [valueSelectPosition, setSelectValuePosition] = useState("");
  const [valueSelectBiotype, setSelectValueBiotype] = useState("");
  const [valueSelectGender, setSelectValueGender] = useState("");
  const [isDisabled, setIsDisable] = useState(false);
  const { setNamePacient, setPositionPacient, setBiotype, SetGender } =
    useContext(PacientContext);
  const { namePacient } = values;

  useEffect(() => {
    setLocalIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (localIsOpen) {
      resetForm();
    }
  }, [localIsOpen]);

  function resetForm() {
    setValues({ namePacient: "" });
    setSelectValuePosition("");
    setSelectValueBiotype("");
    setIsDisable(false);
    setIsTouch(false);
    setError("");
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleBlur() {
    setIsTouch(true);
    validateName();
  }

  function validateName() {
    const trimmedName = namePacient.trim();
    if (trimmedName === "" && !isDisabled) {
      setError("Campo obrigatório");
    } else {
      setError("");
    }
  }

  function closeModal() {
    if (isFormValid()) {
      setPositionPacient(valueSelectPosition);
      setBiotype(valueSelectBiotype);
      setNamePacient(namePacient);
      SetGender(valueSelectGender)
      onCloseModal(namePacient, valueSelectPosition, valueSelectBiotype,valueSelectGender);
      setIsDisable(false);
      setLocalIsOpen(false);
    } else {
      alert("Digite todas as informações necessárias corretamente");
    }
    if (isDisabled) {
      setNamePacient("Anônimo");
    }
  }

  function isFormValid() {
    return (
      (isDisabled || namePacient.trim() !== "") &&
      valueSelectPosition.length > 1 &&
      valueSelectBiotype.length > 1 && 
      valueSelectGender.length > 1
    );
  }

  const handleCheckbox = () => {
    setValues({ namePacient: "" });
    setIsDisable(!isDisabled);
    setError("");
  };

  const handleChangeSelectPosition = (select) => setSelectValuePosition(select.value);

  const handleChangeSelectBiotype = (select) => setSelectValueBiotype(select.value);
  
  const handleChangeSelectGender = (select) => setSelectValueGender(select.value);

  return (
    <Modal
      isOpen={localIsOpen}
      onRequestClose={handleBlur}
      contentLabel="formulario do paciente"
      className="modal-content"
      overlayClassName="modal-overlay"
      aria-hidden="false"
      aria-modal="true"
    >
      <div className="modal">
        <h2 className="information-add">
          Introduza as informações necessárias
        </h2>
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
                  value={namePacient}
                  onChange={onChange}
                  onBlur={handleBlur}
                  className={isTouch && error ? "invalid" : "notInvalid"}
                />
                {isTouch && error && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Campo obrigatório
                  </span>
                )}
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
            <div className="optionGender">
              <div className="validgender">
                <OptionSelect
                value={valueSelectGender}
                onChange={handleChangeSelectGender}
                label="Sexo: "
                options="gender"
                classNamePrefix="Select"
                onBlur={handleBlur}
                className={
                  isTouch && !valueSelectGender ? "invalid" : "notInvalid"
                }
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
              className={
                isTouch && !valueSelectPosition ? "invalid" : "notInvalid"
              }
            />
            <OptionSelect
              value={valueSelectBiotype}
              onChange={handleChangeSelectBiotype}
              label="Escolha um tipo de corpo: "
              options="biotype"
              classNamePrefix="Select"
              onBlur={handleBlur}
              className={
                isTouch && !valueSelectBiotype ? "invalid" : "notInvalid"
              }
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
