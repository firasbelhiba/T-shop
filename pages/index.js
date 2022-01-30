import {
  Carousel,
  BannerStart,
  Testimonials,
  DiscountBanner,
} from "@components/Home";
import { getAllMerch } from "content/myMerch/fetcher";
import { BaseLayout } from "@components/layout";
import { useWeb3 } from "@components/providers";

export default function Home({ merch }) {
  const { web3, isLoading } = useWeb3();
  return (
    <>
      {/* {isLoading
        ? "Is Loading Web3..."
        : web3
        ? "Web 3 Ready!"
        : "Please install metamask on your browser"} */}

      <Carousel />
      <BannerStart />
      <DiscountBanner />
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
