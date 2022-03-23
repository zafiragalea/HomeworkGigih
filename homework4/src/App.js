import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="box">
        <img src="https://upload.wikimedia.org/wikipedia/en/c/c0/5_Seconds_of_Summer_-_Calm.png" />
        <div>
          <p>Red Dessert</p>
          <p>5 Seconds of Summer</p>
          <p>Calm</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;