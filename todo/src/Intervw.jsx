import React, { useState } from 'react';

const Interviw = () => {
    const colors = ['red', 'blue', 'yellow','green'];
    const [count, setCount] = useState(0);

    const previous = () => setCount((prev) => (prev + 1) % colors.length);

    const next = () => setCount((prev) => (prev - 1 + colors.length) % colors.length);

    return (
        <>
        {colors.map((color,index)=>(
            <div key={index} style={{height:'100px', width:'100px', background:colors[(index+count)%colors.length]}}>{color}</div>
        ))}
        <button onClick={previous}>previous</button>
        <button onClick={next}>next</button>
        </>
    );
};

export default Interviw;
