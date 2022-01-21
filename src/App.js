import NavBar from "./NavBar";
import Counters from "./components/Counters";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </div>
  );
}

export default App;
