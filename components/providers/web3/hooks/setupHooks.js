import { handler as createUseAccount } from "./useAccount";
import { handler as createUseNetwork } from "./useNetwork";

export function setupHooks(...dependencies) {
  return {
    useAccount: createUseAccount(...dependencies),
    useNetwork: createUseNetwork(...dependencies),
  };
}
