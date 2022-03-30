import React from "react";

export default function GIF({url,title}){
    return(
        <div>
            <h1>{title}</h1>
            <img src={url} alt={title} />
        </div>
    );
}