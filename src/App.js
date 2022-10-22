import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main"
import Socials from "./components/socials/Socials";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Socials />
    </>

  );
}

export default App;
