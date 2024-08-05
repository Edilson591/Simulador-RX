import React, { createContext,useState } from "react";

export const PacientContext = createContext();

export function PacientInfoProvider({children}) {
    const [namePacient, setNamePacient] = useState("")
    const [positionPacient, setPositionPacient] = useState("")

    

    return (
        <PacientContext.Provider value={
        {namePacient,setNamePacient,
        positionPacient, setPositionPacient}}>
            {children }
        </PacientContext.Provider>
    )
} 

