import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo } from "@components/web3";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { useWeb3 } from "@components/providers";

export default function Home({ merch }) {
  const { web3, isLoading } = useWeb3();
  return (
    <>
      <Carousel />
      <WalletInfo />
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

Home.Layout = BaseLayout;
