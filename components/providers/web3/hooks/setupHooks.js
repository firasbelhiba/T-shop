import { handler as createUseAccount } from "./useAccount";
import { handler as createUseNetwork } from "./useNetwork";
import { handler as createUseOwnedMerch } from "./useOwnedMerch";

export function setupHooks({ web3, provider, contract }) {
  return {
    useAccount: createUseAccount(web3, provider),
    useNetwork: createUseNetwork(web3, provider),
    useOwnedMerch: createUseOwnedMerch(web3, contract),
  };
}
