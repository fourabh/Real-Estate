import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css"
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/value/Value";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
