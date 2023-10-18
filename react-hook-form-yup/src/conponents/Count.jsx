import React, { useState } from 'react'

function Count() {
    const [counter, setCounter] = useState({
        count: 1,
        color: "red"
    });

    const handelClick = () => {
        const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#FFFF00', '#0000FF', '#4B0082', '#8F00FF'];
        let oddColor = counter.color;
        while (oddColor === counter.color) {
            oddColor = colors[Math.floor(Math.random() * colors.length)];
        }
        setCounter({
            ...counter,
            newCount: counter.newCount + 1,
            newColor: oddColor
        });
    }

    return (
        <div style={
            {
                backgroundColor: counter.newColor,
                width: '25%',
                height: '100%',
            }
        }>
            <button style={{
                padding: '10px',
                margin: '50%'
            }} onClick={handelClick}>
                Click Me : {counter.newCount}
            </button>
        </div>
    )
}

export default Count
