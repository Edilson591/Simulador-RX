import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

const useLogout = (time = 2000) => {
  const [logout, setLogout] = useState(false);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogout(true);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  function handleLogout() {
    setAuth(false);
    localStorage.setItem("auth", false);
  }

  return [logout, handleLogout] ;
};

export default useLogout;
