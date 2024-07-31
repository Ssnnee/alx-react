import logo from './holbertonLogo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

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
        <form>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
          <button type='submit'>OK</button>
        </form>
      </div>

      <footer className='App-footer'>
        <p> <i>Copyright {getFullYear()} </i> - {getFooterCopy(true)} </p>
      </footer>
    </div>
  );
}

export default App;
