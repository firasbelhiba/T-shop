import { useEffect } from "react";
import useSWR from "swr";

const whiteListAdminAddresses = {
  "0xd5a331b81345332acd7f10a0f37bf166a6ffcbc28fa8d1d022f9d5bcce55447d": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...swrResponse } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0]));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin:
        data && whiteListAdminAddresses[web3.utils.keccak256(data)]
          ? true
          : false,
      mutate,
      ...swrResponse,
    },
  };
};
