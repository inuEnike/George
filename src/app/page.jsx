import Head from "next/head";
import Image from "next/image";
import Intro from "./components/Intro";
import Index from "./components/Navbar/Index";
import { AppContextProvider } from "./hooks/Context";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta
          name="description"
          content="Inu George Enike Web Developer Portfolio"
        />
        <meta property="og:title" content="De Imperium" />
        <meta
          property="og:description"
          content="Inu George Enike Web Developer Portfolio"
        />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="Your website URL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="Inu George Enike Web Developer Portfolio"
        />
        <meta name="twitter:image" content="URL to your image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Imperium",
              "url": "https://inu-george.netlify.app",
              "description": "Inu George Enike Web Developer Portfolio"
            }
          `}
        </script>
      </Head>
      <AppContextProvider>
        <Index />
      </AppContextProvider>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
