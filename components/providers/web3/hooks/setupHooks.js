import { useAccount } from "./useAccount";

const DEFAULT_HOOKS = {
  useAccount: () => ({ account: null }),
};

export const SetupHooks = (web3) => {
  // if (!web3) {
  //   return DEFAULT_HOOKS;
  // } else
    return {
      useAccount: useAccount(web3),
    };
};
