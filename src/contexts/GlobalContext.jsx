import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [statusLoading, setStatusLoading] = useState("none"); // none / loading / success / error
  const [textLoading, setTextLoading] = useState();
  const [centralName, setCentralName] = useState("Bloco de Notas - IFS");
  const [lastUpdate, setLastUpdate] = useState();
  const [lastDepart, setLastDepart] = useState();
  const [textNotAccess, setTextNotAccess] = useState(); // { acao: "visualizar", departamento: "", setor: "" }

  return (
    <GlobalContext.Provider
      value={{
        statusLoading,
        setStatusLoading,
        textLoading,
        setTextLoading,
        centralName,
        setCentralName,
        lastUpdate,
        setLastUpdate,
        lastDepart,
        setLastDepart,
        textNotAccess,
        setTextNotAccess,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
