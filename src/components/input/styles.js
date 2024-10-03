import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  background-color: #4d38383d;
  border: 1px solid #00ffff;
  position: relative;

  &.invalid {
    border: 1px solid red;
  }

  &:focus-within {
    border-color: #00ffff;
    outline: #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    background-color: transparent!important;
    border: 2px solid #00ffff !important;
    -webkit-text-fill-color: #000000;
  }

  input {
    background: transparent;
    border: none;
    font-size: 18px;
    height: 3rem;
    width: 100%;
    color: #fff;

    &::placeholder {
      padding-left: 4px;
    }
    &:-internal-autofill-selected {
      background-color: transparent;
    }

    &:focus-within {
      border-color: #00ffff;
      outline: #00ffff;
      &:focus {
        border-color: #00ffff;
        outline: #00ffff;
      }
    }
    /* Estilos para preenchimento automático */
  &:-webkit-autofill {
    background: #4d38383d !important;
    border: 1px solid #00ffff !important;
    -webkit-text-fill-color: #fff !important;
  }

  /* Estilos para campos preenchidos automaticamente e focados */
  &:-webkit-autofill:focus {
    background: #4d38383d !important;
    border: 1px solid #00ffff !important;
    -webkit-text-fill-color: #fff !important;
  }
  }
`;
export const ToggleButton = styled.button`
  position: absolute;
  right: 30px;
  background: none;
  border: none;
  transform: translate(50%, 50%);
  cursor: pointer;
  font-size: 18px;
  color: #00ffff;

  &:hover {
    color: #007bff;
  }
`;
