import "./App.css";
import { useEffect, useState, useRef } from "react";
import NavBar from "./comps/NavBar";
import Bar from "./comps/Bar";

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [maxHeight, setMaxHeight] = useState(200);
  const ref = useRef(null);

  const generateArray = ({ arraySize, maxHeight } = {}) => {
    let randomizedArray = [];

    for (let i = 0; i < arraySize; i++) {
      randomizedArray.push({
        height: Math.floor(Math.random() * (maxHeight - 10) + 10),
        color: "#fff",
      });
    }
    return randomizedArray;
  };

  useEffect(() => {
    console.log(ref.current.clientHeight);
    setMaxHeight(ref.current.clientHeight);
    let arr = generateArray({
      arraySize: 100,
      maxHeight: ref.current.clientHeight,
    });
    setDataArray(arr);
  }, []);

  return (
    <div className="App">
      <NavBar
        dataArray={dataArray}
        setDataArray={setDataArray}
        generateArray={generateArray}
        maxHeight={maxHeight}
      ></NavBar>
      <div ref={ref} className="bar-container">
        {dataArray.map((barData, index) => (
          <Bar
            amount={dataArray.length}
            barData={barData}
            key={index}
            maxHeight={maxHeight}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
