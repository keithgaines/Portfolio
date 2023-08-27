import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import ProjectsList from "./components/ProjectsList";
import ContactForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <ProjectsList />
      <ContactForm />
    </div>
  );
}

export default App;
