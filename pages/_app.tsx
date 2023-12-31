import type { AppProps } from 'next/app' 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <main><Component {...pageProps} /></main>
    <Footer/>
    </>
}
