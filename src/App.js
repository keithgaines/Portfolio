import "./App.css";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import ContactForm from "./components/Form";

function App() {
  return (
    <main className="portfolio">
      <Intro />
      <ProjectsList />
      <ContactForm />
    </main>
  );
}

export default App;
