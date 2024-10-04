import React, { useState, useContext, useEffect } from "react";
import Button from "../../components/Button";
import avatarVazio from "../../../src/assets/avatar-vazio.png";
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
  const [modalOpen, setModalOpen] = useState(false);
  const {
    namePacient,
    positionPacient,
    setNamePacient,
    setPositionPacient,
    biotype,
    setBiotype,
    SetGender,
    gender,
    setKvp,
  } = useContext(PacientContext);

  const [resetParaments, setResetParaments] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setResetParaments(false);
    }
  }, [modalOpen]);

  const handleLogoutClick = () => {
    setIsVisible(!isVisible);
    handleLogout();
  };

  // renderiza as informações do paciente quando o modal fechado
  const handlePacient = (name, position, biotype, gender) => {
    setNamePacient(name);
    setPositionPacient(position);
    setBiotype(biotype);
    SetGender(gender);
    setModalOpen(false);
    setResetParaments(true);
  };

  const handleIncrease = (newValue) => {
    setKvp(newValue);
  };

  const handleReset = () => {
    setNamePacient("");
    setBiotype("");
    setPositionPacient("");
    setModalOpen(true);
  };

  const imgPacient =
    gender === "Feminino"
      ? avatarFeminino
      : gender === "Masculino"
      ? avatarMasculino
      : avatarVazio;

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
              <Button Text="Reset" Type="button" onClick={handleReset} />
              <Button Text="Sair" Type="button" onClick={handleLogoutClick} />
            </M.ContainerButton>
          </M.Header>
          <M.Main>
            <section className="section-patient">
              <div className="container-patient">
                <div className="section-flex">
                  <div className="patient-avatar">
                    <img
                      src={imgPacient}
                      className="avatar-gender"
                      alt="Avatar do Paciente"
                    />
                  </div>
                  <div className="info-patient">
                    <h2>
                      Name: <span>{namePacient}</span>
                    </h2>
                    <p>
                      Sexo: <span>{gender || "Indefinido"} </span>
                    </p>
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
                    onIncrease={handleIncrease}
                    reset={resetParaments}
                  />
                </div>
              </M.ContainerDisplay>
            </section>
          </M.Main>
          <ElementModal
            onCloseModal={handlePacient}
            isOpen={modalOpen}
            reset={resetParaments}
          />
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
