import Contexts from "../contexts/context";
// ------------------------------------------------ //
function MyApp({ Component, pageProps }) {
  return (
    <Contexts>
      <Component {...pageProps} />
    </Contexts>
  );
}

export default MyApp;
