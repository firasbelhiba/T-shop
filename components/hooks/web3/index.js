import { useHooks } from "@components/providers/web3";

const enhanceHook = (swrResponse) => {
  return {
    ...swrResponse,
    hasInitialResponse: swrResponse.data || swrResponse.error,
  };
};

export const useAccount = () => {
  const swrResponse = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return {
    account: swrResponse,
  };
};

export const useOwnedMerch = () => {
  const res = useHooks((hooks) => hooks.useOwnedMerch)();

  return { ownedMerch: { data: res } };
};

export const useNetwork = () => {
  const swrResponse = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrResponse,
  };
};
