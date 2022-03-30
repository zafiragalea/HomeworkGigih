import React from "react";

const Sample = () => {
    let counter = 0;

    return (
        <>
            <p>Counter is {counter}</p>
            <br />
            <button
                onClick={() => {
                    counter--;
                }}
            >
                -
            </button>
            <button
                onClick={() =>{
                    counter++;
                }}
            >
                +
            </button>
        </>
    );
};

export default Sample;