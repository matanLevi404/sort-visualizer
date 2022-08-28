import { asyncSetTimeout } from "../helpers/asyncSetTimeout";
import { checkthrough } from "../helpers/checkThrough";

export const QuickSort = async (dataArray, setDataArray, timeout) => {
  let arr = [];
  arr = [...dataArray];
  await quickSort(arr, setDataArray, 0, arr.length, timeout);
  await checkthrough(arr, setDataArray, false);
};

const quickSort = async (arr, setDataArray, low, high, timeout) => {
  if (low < high) {
    let pivotLocation = await partition(arr, setDataArray, low, high, timeout);
    await quickSort(arr, setDataArray, low, pivotLocation, timeout);
    await quickSort(arr, setDataArray, pivotLocation + 1, high, timeout);
  }
};

const partition = async (arr, setDataArray, low, high, timeout) => {
  let pivot = arr[low];
  let i = low + 1;

  arr[low].color = "gray";
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  for (let j = low + 1; j < high; j++) {
    if (arr[j].height < pivot.height) {
      arr[i].color = "yellow";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);
      arr[j].color = "yellow";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      arr[i].color = "red";
      arr[j].color = "red";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      arr[i].color = "#fff";
      arr[j].color = "#fff";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      i += 1;
    }
  }

  arr[low].color = "red";
  arr[i - 1].color = "red";
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  let temp = arr[low];
  arr[low] = arr[i - 1];
  arr[i - 1] = temp;
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  arr[low].color = "green";
  arr[i - 1].color = "green";
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  return i - 1;
};
