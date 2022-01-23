import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo } from "@components/web3";
import { BaseLayout } from "@components/layout";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";

export default function Home({ merch }) {
  return (
    <BaseLayout>
      <Carousel />
      <WalletInfo />
      <BannerStart />
      <List merch={merch} />
    </BaseLayout>
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
