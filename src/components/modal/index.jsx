import React, { useContext, useState, useEffect} from "react";
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
  const [isTouch, setisTouch] = useState(false);
  const [error, setError] = useState('');
  const [valueSelectPosition, setSelectValuePosition] = useState("");
  const [valueSelectBiotype, setSelectValueBiotype] = useState("");
  const [isDisabled, setIsDisable] = useState(false);
  const { setNamePacient, setPositionPacient, setBiotype } = useContext(PacientContext);

  useEffect(() => {
    setLocalIsOpen(isOpen)
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  function resetForm() {
    setValues({ namePacient: "" });
    setSelectValuePosition("");
    setSelectValueBiotype("");
    setIsDisable(false);
    setisTouch(false);
    setError('');
    console.log(isDisabled)
  }

  function onChange(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleBlur() {
    setisTouch(true);
    validateName();
  }

  function validateName() {
    const trimmedName = values.namePacient.trim();
    if (trimmedName === '' && !isDisabled) {
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
      onCloseModal(values.namePacient, valueSelectPosition, valueSelectBiotype);
      setIsDisable(false);
      setLocalIsOpen(false)
    } else {
      alert("Digite todas as informações necessárias corretamente");
    }
  }

  function isFormValid() {
    return (isDisabled || values.namePacient.trim() !== "") &&
    valueSelectPosition.length > 1 &&
    valueSelectBiotype.length > 1;
  }

  const handleCheckbox = () => {
    setNamePacient("Anônimo");
    setValues({ namePacient: "" });
    setIsDisable(!isDisabled);
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
      isOpen={localIsOpen}
      onRequestClose={()=> {}}
      contentLabel="formulario do paciente"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal">
        <h2 className="information-add">
          Introduza as informações necessarias
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
                  value={values.namePacient}
                  onChange={onChange}
                  onBlur={handleBlur}
                  className={isTouch && error ? 'invalid' : 'notInvalid'}
                />
                {isTouch && error && (
                  <span style={{ color: 'red', fontSize: '12px' }}>Campo obrigatório</span>
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
            <OptionSelect
              value={valueSelectPosition}
              onChange={handleChangeSelectPosition}
              label="Escolha uma posição: "
              options="position"
              classNamePrefix="Select"
              onBlur={handleBlur}
              className={isTouch && !valueSelectPosition ? 'invalid' : 'notInvalid'}
            />
            <OptionSelect
              value={valueSelectBiotype}
              onChange={handleChangeSelectBiotype}
              label="Escolha um tipo de corpo: "
              options="biotipo"
              classNamePrefix="Select"
              onBlur={handleBlur}
              className={isTouch && !valueSelectBiotype ? 'invalid' : 'notInvalid'}
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
