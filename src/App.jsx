import "./App.css";
import Forms from "./Components/Forms";
import Navbar from "./Components/Navbar";
import Layout1 from "./Components/layout1";

function App() {
  const data = [{ name: "shahid" }, { name: "shahidd" }];
  function helloworld() {
    alert("hiii shahid");
  }
  return (
    <div className="app">
      <Navbar />
      <Layout1 />
    </div>
  );
}

export default App;
