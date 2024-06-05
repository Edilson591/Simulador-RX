import styled from "styled-components";



export const InputContainer = styled.div`
    padding: 0.8rem 1rem;
    border-radius:20px;
    border-radius: 0.8rem;
    margin-bottom: .2rem;
    background-color: #4d38383d;

    &:focus-within {
        border-color: transparent;
        outline: transparent;
    }

    input {
        background: transparent;
        border: none;
        height: 3rem;
        width: 100%;

        &::placeholder {
            padding-left: 4px;
        }

        &:focus-within {
        border-color: transparent;
        outline: transparent;
    }
        
       
    }


`