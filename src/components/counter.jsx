import React, { Component } from 'react';

function Counter(props){
    
    const getBadgeClasses = ()=>{
        let classes = "badge m-2 badge-"; 
        classes+= props.counter.value === 0 ? classes+="warning": classes+="primary";
        return classes;
    };
    const formatValue= ()=>{
        const {value} = props.counter; // object destructuring
        return value === 0 ? "Zero" : value;

    };

        return (
        <div> 
            <span className = {getBadgeClasses()} >{formatValue()}</span>
            <button onClick={() => props.onIncrement(props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );

}
 
export default Counter;
