import { Navbar, Footer, Breadcrumb, OrderProduct } from "@components/shared";
import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo, EthPriceDisplay } from "@components/web3";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <WalletInfo />
      <BannerStart />
      <Breadcrumb />
      <Footer />
      
      <Script src="assets/js/vendor/jquery-3.4.1.min.js" />
      <Script src="assets/js/popper.js" />
      <Script src="assets/js/bootstrap.min.js" />
      <Script src="assets/js/owl.carousel.min.js" />
      <Script src="assets/js/slick.min.js" />
      <Script src="assets/js/jquery.magnific-popup.min.js" />
      <Script src="assets/js/jquery.countdown.js" />
      <Script src="assets/js/jquery.ui.js" />
      <Script src="assets/js/jquery.elevatezoom.js" />
      <Script src="assets/js/isotope.pkgd.min.js" />
      <Script src="assets/js/plugins.js" />
      <Script src="assets/js/main.js" />
      
    </div>
  );
}
