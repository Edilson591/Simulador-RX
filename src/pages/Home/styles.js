import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
`;

export const ContainerButton = styled.div`
  max-width: 200px;
`;

export const Main = styled.div`
  padding: 2rem 0;
  display: grid;

  .section-user {
    max-width: 300px;
  }
  .section-flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .container-patient {
    width: 400px;
    padding: 15px;
    height: auto;
    border-radius: 5%;
    background-color: #DEDEDE;
  }
  .info-patient {
    width: 250px;
    /* background-color: white; */
    border-radius: 10px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    /* padding: 15px; */
    z-index: 1000;
  }
`;

export const ContainerDisplay = styled.div``;
