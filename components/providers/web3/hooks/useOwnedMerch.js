import useSWR from "swr";

export const handler = (web3, contract) => (merchs, account) => {
  const swrRes = useSWR(
    () => (web3 && contract && account ? `web3/ownedMerchs/${account}` : null),
    async () => {
      const ownedMerchs = [];

      for (let i = 0; i < merchs.length; i++) {
        const merch = merchs[i];

        if (!merch.id) {
          continue;
        }

        const hexMerchId = web3.utils.utf8ToHex(merch.id);
        const merchHash = web3.utils.soliditySha3(
          { type: "bytes16", value: hexMerchId },
          { type: "address", value: account }
        );

        const ownedMerch = await contract.methods
          .getMerchByHash(merchHash)
          .call();
        if (ownedMerch.owner !== "0x0000000000000000000000000000000000000000") {
          const ownedMerchFiltered = {
            ...merch,
            ownedMerchId: ownedMerch.id,
            zkproof: ownedMerch.zkproof,
            owner: ownedMerch.owner,
            priceInEther: web3.utils.fromWei(ownedMerch.price),
          };
          ownedMerchs.push(ownedMerchFiltered);
        }
      }

      debugger;
      return ownedMerchs;
    }
  );

  return swrRes;
};
