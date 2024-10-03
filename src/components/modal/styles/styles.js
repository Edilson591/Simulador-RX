import styled, { css } from "styled-components";
import Modal from "react-modal";

const inputFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  .modal {
    background-color: #fff;
    width: 90%;
    min-width: 600px;
    padding: 2rem;
    z-index: 999;
    color: #000;
    border-radius: 8px;
    margin: 0 auto;
    @media (max-width: 678px) {
      min-width: auto;
    }
    .modal-header {
      .exit-button {
        float: right;
        border: none;
        background: none;
        cursor: pointer;
      }
    }
    h2 {
      padding: 1rem 0;
    }
    form {
      .infors-input {
        .optionName {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        margin-bottom: 1rem;
        .validPatient {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          & > div {
            margin-bottom: 0;
          }

          gap: 0.5rem;
          input {
            height: auto;
            width: 100%;
            font-size: 1rem;
            color: #000;
          }
        }
        .anonyPatient {
          label {
            margin-right: 0.5rem;
          }
          .inputModal {
            margin: 0;
          }
        }
      }
    }
  }

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    ${inputFlex}
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 90%;
    max-width: 600px;
    padding: 2rem;
    z-index: 1000;
    color: #000;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto;

    @media (max-width: 678px) {
      width: 95%;
      min-width: auto;
    }

    h2 {
      padding: 1rem 0;
      color: #fff;
    }

    form {
      .infors-input {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;

        .validPatient {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          input {
            height: auto;
            min-width: 250px;
          }
        }

        .anonyPatient {
          label {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
`;

export const GlobalOverlayStyle = `
  .customOverlay {
     background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
    top: 0;
    left: 0;
    right: 0;
  bottom: 0;
  z-index: 999;
  }
`;
