import React, { useContext, useEffect, useState } from 'react'
import Button from "../../components/Button";
import { AuthContext } from "../../context/authContext";



function Home() {
  const [logout,SetLogout] = useState(false)


  const { setAuth, auth } = useContext(AuthContext);



  setTimeout(() => {
    SetLogout(true)
  }, 2000);

  function handleLogout() {
    setAuth(false)
    localStorage.setItem('auth', false);
  }

  return (
    <>
    {logout ? (
      <div>
        <h1>Home</h1>
        <Button Text="sair" Type='button' onClick={handleLogout}/>
      </div>
      ):(
        <p>Login...</p>
    )}
    </>
  )
}

export default Home
