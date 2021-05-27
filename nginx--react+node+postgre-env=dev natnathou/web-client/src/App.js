import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = async (e) => {
    const response = await axios.get('api/testRoutes');
    console.log(response);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn react
        </a>
        <div onClick={handleClick}>Click me to make request to the server</div>
      </header>
    </div>
  );
}

export default App;
