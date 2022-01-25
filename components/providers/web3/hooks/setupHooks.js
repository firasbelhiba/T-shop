import { handler as createUseAccount } from "./useAccount";

export function setupHooks(web3) {
  return {
    useAccount: createUseAccount(web3),
  };
}
