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

export const useOwnedMerch = (...args) => {
  const swrResponse = enhanceHook(
    useHooks((hooks) => hooks.useOwnedMerch)(...args)
  );

  return { ownedMerch: swrResponse };
};

export const useNetwork = () => {
  const swrResponse = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return {
    network: swrResponse,
  };
};
