import { asyncSetTimeout } from "../helpers/asyncSetTimeout";
import { checkthrough } from "../helpers/checkThrough";

export const SelectionSort = async (dataArray, setDataArray, timeout) => {
  let arr = [...dataArray];
  await selectionSort(arr, setDataArray, timeout);
  await checkthrough(arr, setDataArray, false);
};

const selectionSort = async (arr, setDataArray, timeout) => {
  let min_i;
  for (let i = 0; i < arr.length; i++) {
    arr[i].color = "gray";
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    min_i = i;
    for (let j = i + 1; j < arr.length; j++) {
      arr[j].color = "yellow";
      await asyncSetTimeout({ timeout: timeout + 40 });
      setDataArray([...arr]);
      if (arr[j].height < arr[min_i].height) {
        if (min_i != i) {
          arr[min_i].color = "#fff";
          await asyncSetTimeout({ timeout });
          setDataArray([...arr]);
        }

        min_i = j;

        arr[min_i].color = "red";
        await asyncSetTimeout({ timeout });
        setDataArray([...arr]);
      } else {
        arr[j].color = "#fff";
        await asyncSetTimeout({ timeout });
        setDataArray([...arr]);
      }
    }
    arr[i].color = "#fff";
    await asyncSetTimeout({ timeout: 0 });
    setDataArray([...arr]);

    await swap(arr, min_i, i, setDataArray);
  }
  console.log(arr);
};

const swap = async (arr, prev, cur, setDataArray) => {
  const temp = arr[cur];
  arr[cur] = arr[prev];
  arr[prev] = temp;

  arr[cur].color = "green";
  await asyncSetTimeout({ timeout: 0 });
  setDataArray([...arr]);
};
