import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo } from "@components/web3";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useNetwork } from "@components/hooks/web3/useNetwork";
import { Card } from "@components/shared";
import { useWeb3 } from "@components/providers";

export default function Marketplace({ merch }) {
  const { web3 } = useWeb3();
  const { account } = useAccount();
  const { network } = useNetwork();
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
