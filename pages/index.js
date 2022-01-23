import { Navbar, Footer, Breadcrumb , OrderProduct} from "@components/shared";
import { Carousel, BannerStart } from "@components/Home";
import { WalletInfo, EthPriceDisplay } from "@components/web3";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <WalletInfo />
      <BannerStart />
      <Breadcrumb />
      <Footer />

      <script src="assets/js/vendor/jquery-3.4.1.min.js"></script>

      <script src="assets/js/popper.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/slick.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/jquery.countdown.js"></script>
      <script src="assets/js/jquery.ui.js"></script>
      <script src="assets/js/jquery.elevatezoom.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="assets/js/plugins.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
}
