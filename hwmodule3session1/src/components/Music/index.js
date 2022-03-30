import React from "react";

export default function Music({ url, name, artist, album }) {
  return (
    <div className="container">
      <img src={url} alt="" />
      <h3>{name}</h3>
      <h4 style={{ fontWeight: 200 }}>{artist}</h4>
      <h5 style={{ color: "gray", fontWeight: 200 }}>{album}</h5>
      <button id="select">Select</button>
    </div>
  );
}
