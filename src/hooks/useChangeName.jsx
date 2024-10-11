import { useState } from "react";

export function useChangeName() {
    const [values, setValues] = useState({ namePacient: "" });
    const { namePacient } = values;
    const  onChange =  (event)  =>{
        const { name, value } = event.target;
        setValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return {
        onChange,
        namePacient,
        setValues
      }
    
}