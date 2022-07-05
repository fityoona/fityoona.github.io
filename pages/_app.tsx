import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { FirebaseContextProvider } from '../contexts/FirebaseContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContextProvider>
      <Component {...pageProps} />
    </FirebaseContextProvider>
  );
}

export default MyApp;
