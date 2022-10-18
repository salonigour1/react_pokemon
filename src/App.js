import logo from "./logo.svg";
import "./App.css";
// import Main from "./components/Main";
// import Content from "./components/Content";
// import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePokemon from "./pages/SinglePokemon";
import Error from "./pages/Error";
function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="id/:id" element={<SinglePokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
