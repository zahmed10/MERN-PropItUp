// import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard first="Jane" last="Doe" age={45} color="Black"/>
      <PersonCard first="John" last="Smith" age={88} color="Brown"/>
      <PersonCard first="Millard" last="Fillmore" age={50} color="Brown"/>
      <PersonCard first="Maria" last="Smith" age={62} color="Brown"/>
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
