import { Carousel, BannerStart } from "@components/Home";
import { EthPriceDisplay, WalletInfo } from "@components/web3";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { Card } from "@components/shared";
import { useWeb3 } from "@components/providers";
import { useAccount, useNetwork } from "@components/hooks/web3";
import { useEthPrice } from "@components/hooks/useEthPrice";

export default function Marketplace({ merch }) {
  const { web3 } = useWeb3();
  const { account } = useAccount();
  const { network } = useNetwork();
  const { eth } = useEthPrice();

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
      <List merch={merch}>
        {(merch) => <Card key={merch.id} merch={merch} />}
      </List>
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
