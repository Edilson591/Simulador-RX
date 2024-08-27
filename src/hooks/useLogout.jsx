import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

const useLogout = () => {
  const [logout, setLogout] = useState(false);
  const { setAuth } = useContext(AuthContext);

  // useEffect(() => {
    // const timer = setTimeout(() => {
      // setLogout(true);
    // }, time);

    // return () => clearTimeout(timer);
  // }, [time]);
  useEffect(() => {
    setLogout(true)
  },[])

  function handleLogout() {
    setAuth(false);
    localStorage.setItem("auth", false);
    setLogout(true);
  }

  return [logout, handleLogout] ;
};

export default useLogout;
