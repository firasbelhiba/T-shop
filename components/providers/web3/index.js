const { createContext, useContext } = require("react");

const Web3Context = createContext(null);

export default function Web3Provider({ children }) {
  return (
    <Web3Provider.Provider value={{ Lorem: "ipsum" }}>
      {children}
    </Web3Provider.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
