import styled from "styled-components";

export const ContainerControl = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    
.control-painel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ecf0f1;
    border: 1px solid #ddd;
    gap: 1rem;
    padding: 1rem;
    border-radius: 4px;
    max-width: 160px;
}
.container-control {
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
        font-weight: bold;
        margin: 0 8px;
    }
  }
`