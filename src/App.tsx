import { Home, About, Experience, Portfolio, Contact, Footer } from "./pages";
import { Nav } from "./components/Nav";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
