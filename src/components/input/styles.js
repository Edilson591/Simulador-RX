import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  background-color: #4d38383d;
  border: 1px solid #00ffff;

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
    background-color: #ffffff !important;
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

    &:focus-within {
      border-color: #00ffff;
      outline: #00ffff;
      &:focus {
        border-color: #00ffff;
        outline: #00ffff;
      }
    }
  }
`;
