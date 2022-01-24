import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
