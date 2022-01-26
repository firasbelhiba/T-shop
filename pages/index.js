import { Carousel, BannerStart } from "@components/Home";
import { getAllMerch } from "content/myMerch/fetcher";
import { List } from "@components/product";
import { BaseLayout } from "@components/layout";
import { useWeb3 } from "@components/providers";
import { Card } from "@components/shared";

export default function Home({ merch }) {
  const { web3, isLoading } = useWeb3();
  return (
    <>
      {isLoading
        ? "Is Loading Web3..."
        : web3
        ? "Web 3 Ready!"
        : "Please install metamask on your browser"}

      <Carousel />
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

Home.Layout = BaseLayout;
