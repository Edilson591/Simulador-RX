import styled, { css } from "styled-components";

const inputFlex = css`
    display: flex;
    align-items: center;
    
`

export const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left: 0;
    z-index: 9999;
    display: flex; 
    justify-content: center;
    align-items: center;
        .modal {
            background-color: aliceblue;
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
                    justify-content:space-between;
                    gap: 1rem;
                    .validPatient{
                        ${inputFlex}
                        gap: .5rem;
                        Input {
                            height: auto;
                            min-width: 250px;
                        }
                    }
                    .anonyPatient {
                        label {
                            margin-right: .5rem;
                        }
                    }
                } 
            }
        }
`


