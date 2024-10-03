import { useState } from "react"

export const FormModal = () => {
    const [values,setValues] = useState({name:""});

    return (
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
    )
}