import React, { useState, useContext } from "react";
import Button from "../../components/Button";
import avatarImg from "../../../src/assets/avatar-img.png";
import useLogout from "../../hooks/useLogout";
import ElementModal from "../../components/modal";
import { PacientContext } from "../../hooks/pacientContext";
import * as S from "../Signin/styles";
import * as M from "./styles";

function Home() {
  const [logout, handleLogout] = useLogout(2000);
  const [isVisible, setIsVisible] = useState(true);
  const { namePacient, positionPacient, setNamePacient, setPositionPacient } = useContext(PacientContext);

  const handleLogoutClick = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      handleLogout();
    }, 2000);
  };

  const handlePacient = (name) => {
    setNamePacient(name);
    console.log(namePacient)
  };

  return (
    <>
      {!logout ? (
        <S.Container>
          <p>Login...</p>
        </S.Container>
      ) : isVisible ? (
        <S.Container>
          <M.Header>
            <h1>Simulador de raio x</h1>
            <M.ContainerButton>
              <Button Text="sair" Type="button" onClick={handleLogoutClick} />
            </M.ContainerButton>
          </M.Header>
          <M.Main>
            <section className="section-patient">
              <div className="container-patient">
                <div className="section-flex">
                  <div className="patient-avatar">
                    <img src={avatarImg} alt="Avatar do Paciente" />
                  </div>
                  <div className="info-patient">
                    <h2>
                      Name: <span>{namePacient}</span>
                    </h2>
                    <p>
                      Tipo de exame: <span>{positionPacient}</span>
                    </p>
                    <p>
                      Dose: <span>1.5msv</span>
                    </p>
                    <p>
                      Biotipo: <span>Magro</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <M.ContainerDisplay>display</M.ContainerDisplay>
            </section>
          </M.Main>
          <ElementModal onCloseModal={handlePacient} isOpen={false} />
        </S.Container>
      ) : (
        <S.Container>
          <p>Logout...</p>
        </S.Container>
      )}
    </>
  );
}

export default Home;
