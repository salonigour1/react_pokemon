import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Content from "./components/Content";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Main />
      {/* <Details
        url={"https://pokeapi.co/api/v2/pokemon/2/"}
        visible={2}
        onCancel={3}
      ></Details> */}
      {/* <Content pageNo={4}></Content> */}
    </div>
  );
}

export default App;
