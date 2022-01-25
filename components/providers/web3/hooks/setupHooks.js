import { handler as createUseAccount } from "./useAccount";

export function setupHooks(...dependencies) {
  return {
    useAccount: createUseAccount(...dependencies),
  };
}
