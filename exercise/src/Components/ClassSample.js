import React, { Component } from "react";

class ClassComponent extends Component{
    state = { counter: 0};
    render(){
        return(
            <>
                <p>Counter is {this.state.counter}</p>
                <button 
                    onClick={() => 
                        this.setState((prev) =>({
                            counter: prev.counter - 1,
                        }))
                    }
                >
                    -
                </button>
                <button
                    onClick={() => 
                        this.setState((prev) =>({
                            counter: prev.counter + 1,
                        }))
                    }
                >
                    +
                </button>
            </>
        );
    }
}

export default ClassComponent;