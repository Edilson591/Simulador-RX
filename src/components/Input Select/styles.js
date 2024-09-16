import styled from "styled-components";
import Select from "react-select";

export const ContainerControlSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  max-width: 450px;
`;

export const ContainerSelect = styled(Select)`
    border: 1px solid transparent;
    &.invalid{
        box-sizing: border-box;
        border: 1px solid red;
    }
    
    &:focus-within {
        border-color: transparent;
        outline: transparent;
    }
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #00ffff;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
    cursor: pointer;
  }
  .Select__menu-list:hover {
    /* Cor de fundo das opções dentro do menu */
  }

  .Select__option--is-focused {
    background-color: #00ffff;
  }
  .Select__option--is-selected {
    background-color: #00bfff;
  }
`;
