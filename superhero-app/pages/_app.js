//Este arquivo é responsável por inicializar a aplicação Next.js e importar os estilos globais.
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;