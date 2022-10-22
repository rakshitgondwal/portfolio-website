import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main"
import Socials from "./components/socials/Socials";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Experience />
      <Socials />
    </>

  );
}

export default App;
