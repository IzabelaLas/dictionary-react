import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/IzabelaLas/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          made by Izabela Laszczuk
        </footer>
      </div>
    </div>
  );
}

export default App;
