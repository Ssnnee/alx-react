import logo from './holbertonLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <footer className='App-footer'>
        <p> <i>Copyright 2020</i> - holberton School </p>
      </footer>
    </div>
  );
}

export default App;
