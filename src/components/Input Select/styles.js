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
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
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
    background-color: #c0e10e;
  }
  .Select__option--is-selected {
    background-color: #e9e84d;
  }
`;
