import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header.component";
import { Home } from "./pages/Home/Home.component";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
