import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Footer from "../components/Footer";
import { Contact } from "../components/contact";
import Api from "../components/Api";
import Resume from "../components/ProfessionalResume";

function Index() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />

      <Resume />
      <Contact />
      <Api />
      <Footer />
    </div>
  );
}

export default Index;
