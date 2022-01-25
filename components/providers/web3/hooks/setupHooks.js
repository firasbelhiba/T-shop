import { useAccount } from "./useAccount";

const DEFAULT_HOOKS = {
  useAccount: () => ({ account: null }),
};

export function setupHooks(web3) {
  // if (!web3) {
  //   return DEFAULT_HOOKS;
  // } else
  return {
    useAccount: useAccount(web3),
  };
}
