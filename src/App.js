import logo from './logo.svg';
import axios from 'axios';
import './App.css';

componentDidMount() {
  axios.get('https://api.punkapi.com/v2/beers')
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({ arrayOfBeer })
  })
}

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
