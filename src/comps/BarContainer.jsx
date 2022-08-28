import React, { useEffect, useState } from "react";
import { BubbleSort } from "../algo/BubbleSort";
import { QuickSort } from "../algo/QuickSort";
import { MergeSort } from "../algo/MergeSort";
import Bar from "./Bar";
import { SelectionSort } from "../algo/SelectionSort";

export default function BarContainer({ dataArray, setDataArray }) {
  useEffect(() => {}, []);

  return (
    <div className="bar-container">
      {dataArray.map((barData, index) => (
        <Bar amount={dataArray.length} barData={barData} key={index} />
      ))}
    </div>
  );
}
