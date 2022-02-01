import { Carousel, BannerStart } from "@components/Home";
import { EthPriceDisplay, WalletInfo } from "@components/web3";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { Breadcrumb, Button, Card } from "@components/shared";
import { useWeb3 } from "@components/providers";
import { useAccount, useNetwork } from "@components/hooks/web3";
import { useEthPrice } from "@components/hooks/useEthPrice";
import { useState } from "react";

//Primereact
import { Dialog } from "primereact/dialog";
import { OrderModal } from "@components/order";

export default function Marketplace({ merchs }) {
  const { web3, contract } = useWeb3();
  const { account } = useAccount();
  const { network } = useNetwork();
  const { eth } = useEthPrice();

  const canPurchaseMerch = !!(account.data && network.isSupported);

  const [visible, setVisible] = useState(false);
  const [selectedMerch, setSelectedMerch] = useState(null);

  const purchaseMerch = async (email, priceInEther) => {
    const hexMerchId = web3.utils.utf8ToHex(selectedMerch.id);
    const orderHash = web3.utils.soliditySha3(
      {
        type: "bytes16",
        value: hexMerchId,
      },
      { type: "address", value: account.data }
    );

    const emailHash = web3.utils.sha3(email);

    // Proof = email hash + order hash
    const zkproof = web3.utils.soliditySha3(
      {
        type: "bytes32",
        value: emailHash,
      },
      {
        type: "bytes32",
        value: orderHash,
      }
    );
    console.log(contract.methods);
    const value = web3.utils.toWei(String(priceInEther), "ether");

    try {
      const result = await contract.methods
        .purchaseMerch(hexMerchId, zkproof)
        .send({ from: account.data, value });
      console.log(result);
    } catch (error) {
      console.error("Purchase course: Operation has failed.");
      console.log(error);
    }
  };

  return (
    <>
      <Carousel />

      <WalletInfo
        web3={web3}
        account={account.data}
        network={network.data}
        targetNetwork={network.target}
        isSupported={network.isSupported}
        isLoading={network.isLoading}
      />
      <EthPriceDisplay eth={eth.data} />
      <BannerStart />
      <Breadcrumb />
      <List merchs={merchs}>
        {(merch) => (
          <Card
            key={merch.id}
            merch={merch}
            onClick={() => setSelectedMerch(merch)}
            Footer={() => (
              <div>
                {canPurchaseMerch && (
                  <Button
                    onClick={() => {
                      setVisible(true);
                      setSelectedMerch(merch);
                    }}
                  >
                    Purchase
                  </Button>
                )}
              </div>
            )}
          />
        )}
      </List>

      <Dialog
        header="You want to buy this merch ? "
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <OrderModal
          onPurchaseMerch={purchaseMerch}
          selectedMerch={selectedMerch}
        />
      </Dialog>
    </>
  );
}

export function getStaticProps() {
  const { data, myMerchMap } = getAllMerch();
  return {
    props: {
      merchs: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
