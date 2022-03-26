import React from "react";

export default function Music({ url, name, artist, album, link }) {
  return (
    <div className="container">
      <img src={url} alt="" />
      <h3>{name}</h3>
      <h3>{artist}</h3>
      <h5 style={{ color: "gray", fontWeight: 200 }}>{album}</h5>
      
      <button id="select"><a href={link}>Select</a></button>
    </div>
  );
}