import styled from "styled-components";

export const ContainerHome = styled.div`
  display: block;
  padding: 1rem;
`;

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

  button {
    margin:0;
  }
`;

export const Main = styled.div`
  padding: 2rem;
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  .section-user {
    max-width: 300px;
  }
  .section-flex {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 678px) {
      flex-direction: column;
    }

    .avatar-gender {
      max-width: 100px;
    }
  }
  .container-patient {
    max-width: 600px;
    padding: 15px;
    height: auto;
    border-radius: 8px;
    background-color: #564e58;
  }
  .info-patient {
    display: flex;
    gap: 5px;
    flex-direction: column;
    border-radius: 10px;
    z-index: 998;
  }
`;

export const ContainerDisplay = styled.div`
  .console-display {
    max-width: 600px;
    border-radius: 8px;
    padding: 20px;
    -webkit-box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
    -moz-box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
    box-shadow: inset 11px 9px 47px -6px rgba(135, 132, 135, 1);
  }
`;
