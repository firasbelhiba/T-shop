import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>Braga - Fashion eCommerce HTML Template </title>
            <meta name="description" content />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {/* Favicon */}
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href="assets/img/favicon.ico"
            />
            {/* CSS 
    ========================= */}
            {/*bootstrap min css*/}
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            {/*owl carousel min css*/}
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
            {/*slick min css*/}
            <link rel="stylesheet" href="assets/css/slick.css" />
            {/*magnific popup min css*/}
            <link rel="stylesheet" href="assets/css/magnific-popup.css" />
            {/*font awesome css*/}
            <link rel="stylesheet" href="assets/css/font.awesome.css" />
            {/*ionicons css*/}
            <link rel="stylesheet" href="assets/css/ionicons.min.css" />
            {/*7 stroke icons css*/}
            <link rel="stylesheet" href="assets/css/pe-icon-7-stroke.css" />
            {/*animate css*/}
            <link rel="stylesheet" href="assets/css/animate.css" />
            {/*jquery ui min css*/}
            <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
            {/*plugins css*/}
            <link rel="stylesheet" href="assets/css/plugins.css" />
            {/* Main Style CSS */}
            <link rel="stylesheet" href="assets/css/style.css" />
            {/*modernizr min js here*/}
          </div>
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
