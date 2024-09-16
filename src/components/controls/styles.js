import styled from "styled-components";

export const ContainerControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .control-painel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #564E58;
    border: 1px solid #ddd;
    gap: 1rem;
    padding: 1rem;
    border-radius: 4px;
    max-width: 100%;
  }
  .container-control {
    display: flex;
    align-items: center;
    button {
      padding: 8px;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      background-color: #bdc3c7;
      cursor: pointer;
    }
    .control-name {
      font-size: 1rem;
      display: inline-block;
      text-align: center;
      font-weight: bold;
      margin: 0 5px;
      font-family: "Courier New", Courier, monospace;
    }
  }
`;
