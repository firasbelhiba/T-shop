import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo } from "@components/web3";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { useAccount } from "@components/hooks/web3/useAccount";

export default function Marketplace({ merch }) {
  const { account } = useAccount();
  return (
    <>
      <Carousel />
      <WalletInfo account={account.data} />
      <BannerStart />
      <List merch={merch} />
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
