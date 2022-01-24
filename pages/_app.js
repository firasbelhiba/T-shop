import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 // const Layout = Component.Layout;

  return (
    // <Layout>
    // </Layout>
      <Component {...pageProps} />
  );
}

export default MyApp;
