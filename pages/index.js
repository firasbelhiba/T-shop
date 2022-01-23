import { Navbar, Footer, Breadcrumb, OrderProduct } from "@components/shared";
import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo, EthPriceDisplay } from "@components/web3";
import { Card } from "@components/order";
import Script from "next/script";
import { BaseLayout } from "@components/layout";

export default function Home() {
  return (
    <BaseLayout>
      <Carousel />
      <WalletInfo />
      <BannerStart />
      <Breadcrumb />
    </BaseLayout>
  );
}
