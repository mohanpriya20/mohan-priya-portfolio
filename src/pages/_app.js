import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Roboto, Mina, Smooch_Sans, Merriweather, Metal, Moon_Dance } from 'next/font/google';

// Load fonts with next/font
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const mina = Mina({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const smoochSans = Smooch_Sans({
  weight: ['100', '900'],
  subsets: ['latin'],
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const metal = Metal({
  weight: '400',
  subsets: ['latin'],
});

const moonDance = Moon_Dance({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} ${mina.variable} ${smoochSans.variable} ${merriweather.variable} ${metal.variable} ${moonDance.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
