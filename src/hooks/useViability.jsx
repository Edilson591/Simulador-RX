import { useContext, useEffect, useState } from "react";
import { PacientContext } from "./pacientContext";
import parametsApi from "../data/parameters.json";

export function useViability() {
  const { biotype, positionPacient } = useContext(PacientContext);
  const [kvp, setKvp] = useState(null);
  const [ma, setMa] = useState(null);
  const [mas, setMas] = useState(null);
  useEffect(() => {
    const handleViability = () => {
      const newPositionPacient = positionPacient.toLowerCase().split(" ")[0];
      const findBiotype = parametsApi.parameters.map(
        (item) => item.bodyType === biotype && item.exams[newPositionPacient]
      );
      const filterBoleanValue = findBiotype.find((item) => Boolean(item));
  
        setKvp(filterBoleanValue?.KVP);
        setMa(filterBoleanValue?.MA);
        setMas(filterBoleanValue?.MAS);
    };
    handleViability()
  },[biotype,positionPacient]);

  return {
    kvp,
    ma,
    mas,
  };
}
