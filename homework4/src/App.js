import './App.css';
import React from 'react';
import DataMusic from "./components/Music/dataMusic.js";
import Music from './components/Music';
function App() {
  return (
    
    <div className="App">
        {
          DataMusic.map((data)=>(
            <React.Fragment key = {data.id}>
              <div className="box">
                <Music
                  url={data.album.images[0].url}
                  name={data.name}
                  artist={data.artists[0].name}
                  album={data.album.name}
                  link={data.external_urls.spotify}
                />
              </div>
            </React.Fragment>
          ))
        }
     </div>
  );
}

export default App;