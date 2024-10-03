import React, { createContext,useState } from "react";

export const PacientContext = createContext();

export function PacientInfoProvider({children}) {
    const [namePacient, setNamePacient] = useState("");
    const [positionPacient, setPositionPacient] = useState("");
    const [biotype,setBiotype] = useState("");
    const [gender, SetGender] = useState("")
    const [kvp,setKvp] = useState(45);

    

    return (
        <PacientContext.Provider value={
        {namePacient,setNamePacient,
        positionPacient, setPositionPacient,
        biotype, setBiotype,
        gender,SetGender,
        kvp, setKvp,
        }}>
            {children }
        </PacientContext.Provider>
    )
} 

