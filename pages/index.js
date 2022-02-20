import {
  Carousel,
  BannerStart,
  DiscountBanner,
  DescriptionBanner,
} from "@components/Home";
import { getAllMerch } from "content/myMerch/fetcher";
import { BaseLayout } from "@components/layout";
import { useWeb3 } from "@components/providers";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Home({ merch }) {
  const { web3, isLoading } = useWeb3();
  const MySwal = withReactContent(Swal);
  if (!isLoading) {
    if (web3) {
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "A wallet has been detected",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      MySwal.fire({
        icon: "question",
        title: "Oops...",
        text: "You are not connected to Metamask",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }
  return (
    <>
      <Carousel />
      <BannerStart />
      <DiscountBanner />
      <DescriptionBanner />
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
