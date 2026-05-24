import "./App.css";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import Capabilities from "./components/Capabilities";
import ContactForm from "./components/Form";

function App() {
  return (
    <main className="portfolio">
      <Intro />
      <ProjectsList />
      <Capabilities />
      <ContactForm />
    </main>
  );
}

export default App;
