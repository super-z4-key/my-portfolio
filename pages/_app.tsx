import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <div className="container-none h-auto w-full box-border bg-slate-900">
         <Navbar />
         <div className="container-none w-full h-auto">
            <Component {...pageProps} />
         </div>
         <Footer />
      </div>
   );
}
