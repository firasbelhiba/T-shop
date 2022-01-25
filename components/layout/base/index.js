import { Footer, Navbar } from "@components/shared";
import Script from "next/script";
import { useWeb3, Web3Provider } from "@components/providers";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <Navbar />
      {children}
      <Footer />

      <Script
        src="/assets/js/vendor/jquery-3.4.1.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/popper.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/owl.carousel.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/assets/js/jquery.countdown.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/jquery.ui.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/jquery.elevatezoom.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/main.js" strategy="beforeInteractive" />

      {/* Primereact  */}
      <Script src="https://unpkg.com/primereact/core/core.min.js" />
      <Script src="https://unpkg.com/primereact/progressspinner/progressspinner.min.js" />
    </Web3Provider>
  );
}
