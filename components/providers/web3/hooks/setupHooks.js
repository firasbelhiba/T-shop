import { hookAccount } from "./hookAccount";

const DEFAULT_HOOKS = {
  hookAccount: () => ({ account: null }),
};

export function setupHooks(web3) {
  // if (!web3) {
  //   return DEFAULT_HOOKS;
  // } else
  return {
    hookAccount: hookAccount(web3),
  };
}
