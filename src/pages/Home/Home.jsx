import React, { useState, useContext, useEffect } from "react";
import Button from "../../components/Button";
import avatarVazio from "../../../src/assets/avatar-vazio.jpg";
import avatarFeminino from "../../../src/assets/avatar-feminino.png";
import avatarMasculino from "../../../src/assets/avatar-masculino.png";
import useLogout from "../../hooks/useLogout";
import ElementModal from "../../components/modal";
import ConsolePrincipal from "../../components/controls";
import { PacientContext } from "../../hooks/pacientContext";
import * as S from "../Signin/styles";
import * as M from "./styles";

function Home() {
  const [logout, handleLogout] = useLogout();
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);
  const {
    namePacient,
    positionPacient,
    setNamePacient,
    setPositionPacient,
    biotype,
    setBiotype,
    SetGender,
    gender

  } = useContext(PacientContext);
  const [kvps, setKvps] = useState(70);
  const [resetKvp, setResetKvp] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      console.log(kvps);
    }
  }, [modalOpen]);
  
  const handleLogoutClick = () => {
    setIsVisible(!isVisible);
    handleLogout();
  };

  const handleResetKvp = () => {
    setResetKvp(true);
    setTimeout(() => setResetKvp(false), 0);
  };
  
  const handlePacient = (name, position, biotype, gender) => {
    setNamePacient(name);
    setPositionPacient(position);
    setBiotype(biotype);
    SetGender(gender);
    setModalOpen(false);
  };

  const handleIncrease = (newValue) => {
    setKvps(newValue);
  };

  const handleDecrease = (newValue) => {
    setKvps(newValue);
  };

  const handleReset = () => {
    setNamePacient("");
    setBiotype("");
    setPositionPacient("");
    setModalOpen(true);
  };

  let avatarPacient;

  switch (avatarPacient) {
    case "":
      
      break;
  
    default:
      break;
  }

  return (
    <>
      {!logout ? (
        <S.Container aria-hidden="true">
          <p>Login...</p>
        </S.Container>
      ) : isVisible ? (
        <M.ContainerHome>
          <M.Header>
            <h1>Simulador de raio x</h1>
            <M.ContainerButton>
              <Button Text="Reset" Type="button" onClick={handleResetKvp} />
              <Button Text="Sair" Type="button" onClick={handleLogoutClick} />
            </M.ContainerButton>
          </M.Header>
          <M.Main>
            <section className="section-patient">
              <div className="container-patient">
                <div className="section-flex">
                  <div className="patient-avatar">
                    <img src={
                      gender === "masculino" ?
                      avatarMasculino
                      : gender === "feminino" 
                      ? avatarFeminino
                      : avatarVazio
                      } className="avatar-gender" alt="Avatar do Paciente" />
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
                      Biotipo: <span>{biotype}</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <M.ContainerDisplay>
                <div className="console-display">
                  <ConsolePrincipal
                    kvp={kvps}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onReset={handleReset}
                    reset={resetKvp}
                  />
                </div>
              </M.ContainerDisplay>
            </section>
          </M.Main>
          <ElementModal onCloseModal={handlePacient} isOpen={modalOpen} reset={resetKvp} onReset={handleResetKvp} />
        </M.ContainerHome>
      ) : (
        <S.Container>
          <p>Logout...</p>
        </S.Container>
      )}
    </>
  );
}

export default Home;
