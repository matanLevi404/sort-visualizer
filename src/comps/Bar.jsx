import React, { useEffect } from "react";

export default function Bar({ amount, barData }) {
  useEffect(() => {}, []);

  return (
    <div
      className="animate"
      style={{
        backgroundColor: barData.color,
        width: `${(4 / amount) * 250}px`,
        height: `${barData.height}px`,
      }}
    ></div>
  );
}
