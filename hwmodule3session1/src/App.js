import './App.css';
// import Button from "./components/Button";
// import { title , imageAlbum , artist } from './data.js';
// import Gif from "./components/GIF";
// import React from 'react';
import data from "./data.js";
import Music from "./components/Music";
import Home from './pages/Home';

function App() {
//   const gif = {
//     id: '4HrBfVJJveBNS9ytSk',
//     title: 'Nintendo Plotting GIF by Gaming GIFs',
//     uploadedDate: '2018-04-03 15:21:50',
//     url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
//     webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
//   };

  return (
    // <div className="App">
    //   <div className="box">
    //      {/* <img src={imageAlbum} />
    //      <div>
    //        <h5>{title}</h5>
    //        <p>{artist}</p>
    //        <Button />
    //      </div> */}

    //     <Music
    //       url={data.album.images[0].url}
    //       name={data.name}
    //       artist={data.artists[0].name}
    //       album={data.album.name}
    //     />

    //    </div>
    //    {/* <div>
    //      <Gif url={gif.url} title={gif.title} />
    //    </div> */}
    //  </div>

    <Home />
  );
}

export default App;

