import './App.css';
import Button from "./components/Button";
import { title,imageAlbum,artist } from './data';

function App() {

  return (
    <div className="App">
      <div className="box">
        <img src={imageAlbum} />
        <div>
          <h5>{title}</h5>
          <p>{artist}</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;