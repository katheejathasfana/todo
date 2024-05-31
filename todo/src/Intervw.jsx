import React, { useState } from "react";

const Interviw = () => {
  const colors = ["red", "blue", "yellow", "green"];
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(["red", "blue", "yellow"]);

  const handlenext = () => {
    setColor((prev) => {
      const newcolor = [...prev];
      const last = newcolor.pop();
      newcolor.unshift(last);
      return newcolor;
    });
  };

  const handlepreve = () => {
    setColor((prev) => {
      const newColor = [...prev];
      const first = newColor.shift();
      newColor.push(first);
      return newColor;
    });
  };

  const previous = () => setCount((prev) => (prev + 1) % colors.length);

  const next = () =>
    setCount((prev) => (prev - 1 + colors.length) % colors.length);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "5px",
          alignItems: "center",
        }}
      >
        <button className="px-2 py-1 border border-dark" onClick={previous}>
          previous
        </button>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              dispay: "flex",
              padding: "5px",
              height: "100px",
              width: "100px",
              background: colors[(index + count) % colors.length],
            }}
          >
            {color}
          </div>
        ))}
        <button className="px-2 py-1 border border-dark" onClick={next}>
          next
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={handlepreve}>prev</button>
        {color.map((clr, index) => (
          <div
            key={index}
            style={{
              height: "100px",
              width: "100px",
              background: color[index],
            }}
          >
            {color[index]}
          </div>
        ))}

        <button onClick={handlenext}>next</button>
      </div>
    </>
  );
};

export default Interviw;
