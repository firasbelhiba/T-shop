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

export default function Marketplace({ merch }) {
  const { web3 } = useWeb3();
  const { account } = useAccount();
  const { network } = useNetwork();
  const { eth } = useEthPrice();

  const canPurchaseMerch = !!(account.data && network.isSupported);

  const [visible, setVisible] = useState(false);

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
      <List merch={merch}>
        {(merch) => (
          <Card
            key={merch.id}
            merch={merch}
            Footer={() => (
              <div>
                {canPurchaseMerch && (
                  <Button onClick={() => setVisible(true)}>Purchase</Button>
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
        <OrderModal />
      </Dialog>
    </>
  );
}

export function getStaticProps() {
  const { data, myMerchMap } = getAllMerch();
  return {
    props: {
      merch: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
