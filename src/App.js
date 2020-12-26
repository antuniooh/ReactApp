import './App.css';

import data from './data.json';
import SocialFollow from "./SocialFollow"

function App() {
  const randomElement = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Você sabia?</h1>
        <h2>{randomElement.value}</h2>
      </header>
      <SocialFollow />
    </div>
  );
}

export default App;
