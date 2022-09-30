import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://oluwatobisalau.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learnLink"
        >
          Tobi's Portfolio Site
        </a>
      </header>
    </div>
  );
}

export default App;
