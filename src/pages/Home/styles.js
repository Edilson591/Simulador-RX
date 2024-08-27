import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
`;

export const ContainerButton = styled.div`
  max-width: 200px;
  display: flex;
  gap: 8px;
`;

export const Main = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 50%);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  border: 1px solid;

  .section-user {
    max-width: 300px;
  }
  .section-flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .container-patient {
    max-width: 500px;
    padding: 15px;
    height: auto;
    border-radius: 5%;
    background-color: #dedede;
  }
  .info-patient {
    width: 250px;
    border-radius: 10px;
    z-index: 998;
  }
`;

export const ContainerDisplay = styled.div`
  .console-display {
    max-width: 500px;
    border-radius: 8px;
    padding: 20px;
    -webkit-box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
    -moz-box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
    box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
  }
`;
