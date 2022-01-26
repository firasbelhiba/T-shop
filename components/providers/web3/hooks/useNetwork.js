import { useEffect } from "react";
import useSWR from "swr";

const NETWORK = {
  1: "Main Ethereum network",
  3: "Ropsten test network",
  4: "Rinkeby test network",
  5: "Goerli test network",
  42: "Kovan test netwoek",
  56: "Binance Smart Chain",
  1337: "Ganache",
};

const targetNetwork = NETWORK["1"];

export const handler = (web3, provider) => () => {
  const { data,error, mutate, ...swrResponse } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return NETWORK[chainId];
    }
  );
  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId) => mutate(parseInt(chainId, 16)));
  }, [web3]);
  return {
    network: {
      data,
      isLoading : !data && !error,
      mutate,
      target: targetNetwork,
      isSupported: data === targetNetwork,
      ...swrResponse,
    },
  };
};
