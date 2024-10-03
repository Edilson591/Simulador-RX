import styled from "styled-components";

export const ContainerControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  

  @media (max-width: 678px) {
    flex-direction: column;
    
    align-items: flex-start;
    width: 160px;
  }

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
    width: 100%;
  }
  .container-control {
    display: flex;
    align-items: center;
    min-width: 120px;
    justify-content: space-between;

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
      font-family: "Courier New", Courier, monospace;
    }
  }
`;
