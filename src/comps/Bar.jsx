import React, { useEffect } from "react";

export default function Bar({ amount, barData, maxHeight }) {
  useEffect(() => {}, []);

  return (
    <div
      className="animate"
      style={{
        backgroundColor: barData.color,
        width: `${(4 / amount) * (maxHeight / 2)}px`,
        height: `${barData.height}px`,
      }}
    ></div>
  );
}
