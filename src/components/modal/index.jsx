import React, { useContext, useState, useEffect } from "react";
import { PacientContext } from "../../hooks/pacientContext";
import Input from "../Input";
import OptionSelect from "../InputSelect";
import svgRemove from "../../assets/icon-remove-item.svg";
import Button from "../Button";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerModal } from "./styles/styles";
import useLogout from "../../hooks/useLogout";


ContainerModal.setAppElement("#root");

function ElementModal({ onCloseModal, isOpen }) {
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
  const [logout, handleLogout] = useLogout();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  function resetForm() {
    setValues({ namePacient: "" });
    setSelectValuePosition("");
    setSelectValueBiotype("");
    setSelectValueGender("");
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
      SetGender(valueSelectGender);
      onCloseModal(
        namePacient,
        valueSelectPosition,
        valueSelectBiotype,
        valueSelectGender
      );
    } else {
      alert("Digite todas as informações necessárias corretamente");
      handleBlur() 
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
    setIsDisable((prev) => !prev);
    if (!isDisabled) {
      setValues({ namePacient: "" });
      setError("");
    }
  };

  const handleChangeSelectPosition = (select) =>
    setSelectValuePosition(select.value);

  const handleChangeSelectBiotype = (select) =>
    setSelectValueBiotype(select.value);

  const handleChangeSelectGender = (select) =>
    setSelectValueGender(select.value);


  return (
    <>
      <GlobalStyles />
      <ContainerModal
        isOpen={isOpen}
        onRequestClose={handleBlur}
        contentLabel="formulario do paciente"
        className="modal-content"
        overlayClassName="customOverlay"
        aria-hidden="false"
        aria-modal="true"
      >
        <div className="modal">
          <div className="modal-header">
            <button onClick={handleLogout} className="exit-button">
              <img src={svgRemove} alt="icon fecha aplicação" />
            </button>
            <h2 className="information-add">
              Introduza as informações necessárias
            </h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
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
                    className="inputModal"
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
      </ContainerModal>
    </>
  );
}

export default ElementModal;
