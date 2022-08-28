import "./App.css";
import BarContainer from "./comps/BarContainer";
import { useEffect, useState } from "react";
import NavBar from "./comps/NavBar";

function App() {
  const [dataArray, setDataArray] = useState([]);

  const generateArray = ({ arraySize } = {}) => {
    let randomizedArray = [];

    for (let i = 0; i < arraySize; i++) {
      randomizedArray.push({
        height: Math.floor(Math.random() * (520 - 10) + 10),
        color: "#fff",
      });
    }
    return randomizedArray;
  };

  useEffect(() => {
    let arr = generateArray({ arraySize: 100 });
    setDataArray(arr);
  }, []);

  return (
    <div className="App">
      <NavBar
        dataArray={dataArray}
        setDataArray={setDataArray}
        generateArray={generateArray}
      ></NavBar>
      <BarContainer dataArray={dataArray} setDataArray={setDataArray} />
    </div>
  );
}

export default App;
