import Intro from "./components/Intro";
import Index from "./components/Navbar/Index";
import { AppContextProvider } from "./hooks/Context";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Page() {
  return (
    <>
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
