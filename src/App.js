import "./App.css";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import ContactForm from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="portfolio">
      <Intro />
      <ProjectsList />
      <Capabilities />
      <Experience />
      <Certifications />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
