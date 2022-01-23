import { Footer, Navbar } from "@components/shared";

export default function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      {/* <Script src="assets/js/vendor/jquery-3.4.1.min.js" />
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
        <Script src="assets/js/main.js" /> */}
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
