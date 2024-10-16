import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import logoRadiologia from "../../../src/assets/img-logo.png";
import { AuthContext } from "../../context/authContext";
import Button from "../../components/Button";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [values, setValues] = useState({ email: "", password: "" });

  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    const getAuth = localStorage.getItem("auth");
    if (getAuth) {
      setAuth(JSON.parse(getAuth));
    }
  }, [setAuth]);

  function onChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (values.email === "exemplo@email.com" && values.password === "123") {
      setAuth(true);
      navigate("/");
      localStorage.setItem("auth", true);
    } else {
      alert("Usuario ou senha esta incorreto");
    }
  }

  return (
    <S.Container>
      <div className="container-shadow">
        <S.Header>
          <div className="content-flex">
            <div className="img-logo">
              <img src={logoRadiologia} alt="Foto Logo" />
            </div>
            <h1>Simulador de Raio X</h1>
          </div>
        </S.Header>
        <S.Main>
          <div className="content-flex">
            <div className="tag-login">Login</div>
            <div className="container-input">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  onChange={onChange}
                  value={values.email}
                  name="email"
                  id="email"
                  autoComplete="username"
                />

                <label htmlFor="current-password"></label>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={onChange}
                  value={values.password}
                  name="password"
                  autoComplete="current-password"
                />
                <S.ForgotPasswordLink to="/forgotpassoword">
                  Esqueceu sua senha?
                </S.ForgotPasswordLink>

                <Button Type="submit" Text="Entrar" />
              </form>
            </div>
          </div>
        </S.Main>
      </div>
    </S.Container>
  );
}

export default Signin;
