import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='gallery' className="App-logo" alt="logo" width="200" height="50" />
        <p>
          Let's explore the scenic beauty !
        </p>
        <a
          className="App-link"
          href="index.html"
          target="_blank"
        //rel="noopener noreferrer"
        >
          Gallery
        </a>
      </header>
    </div>
  );
}

export default App;
