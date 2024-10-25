import styled from "styled-components";

export const Button = styled.button`
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    cursor:pointer;
    background-color: #00ffff;
    color: #351414;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    transition: background-color .5s ease;
    @media (max-width: 768px) {
        font-size: 1rem;
    }

    &:hover {
        background-color: #00bfff;
    }
    
`