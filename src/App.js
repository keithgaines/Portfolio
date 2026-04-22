import "./App.css";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import ContactForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <Intro />
      <ProjectsList />
      <ContactForm />
    </div>
  );
}

export default App;
