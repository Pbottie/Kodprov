import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilmContent from "./components/FilmContent";

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <div className="App">
        <Header />
        <FilmContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
