import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Api from "../components/Api";

function Index() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Api />
      <Footer />
    </div>
  );
}

export default Index;
