import styled, { css } from "styled-components";

const inputFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  ${inputFlex}
  background-color: aqua;
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
    .modal {
      background-color: #564E58;
      width: 40%;
      min-width: 300px;
      padding: 2rem;
      border: 5px solid #251532;
      h2 {
        padding: 1rem 0;
      }
      form {
        .infors-input {
          ${inputFlex}
          justify-content: space-between;
          gap: 1rem;
          .validPatient {
            ${inputFlex}
            gap: .5rem;
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
  }
`;

