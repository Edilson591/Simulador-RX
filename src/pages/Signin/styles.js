import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 900px;

  .content-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    .tag-login {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  padding: 3rem 0;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  .img-logo {
    max-width: 100px;
  }
`;

export const Main = styled.div`
  padding: 10px;
  margin: 0 auto;

  .container-input {
    width: 100%;
    max-width: 350px;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.3rem;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: #351414;
  text-decoration: none;
  cursor: pointer;
  text-align: end;
  margin: 0.3rem 0 1rem 0;

  &:hover {
    text-decoration: underline;
  }
`;
