import { asyncSetTimeout } from "../helpers/asyncSetTimeout";
import { checkthrough } from "../helpers/checkThrough";

export const MergeSort = async (dataArray, setDataArray, timeout) => {
  let arr = [...dataArray];
  let copyArr = [];
  const oldMiddle = Math.floor((0 + arr.length) / 2);

  await mergeSort(arr, 0, arr.length, setDataArray, oldMiddle, timeout);
  await checkthrough(arr, setDataArray, true);
};

const mergeSort = async (
  arr,
  left,
  right,
  setDataArray,
  oldMiddle,
  timeout
) => {
  if (right > left) {
    const newMiddle = Math.floor((left + right) / 2);
    await mergeSort(arr, left, newMiddle, setDataArray, newMiddle, timeout);
    await mergeSort(
      arr,
      newMiddle + 1,
      right,
      setDataArray,
      newMiddle,
      timeout
    );
    await doMerge(arr, right, left, newMiddle, setDataArray, timeout);
  }
};

const doMerge = async (arr, right, left, middle, setDataArray, timeout) => {
  let k = left;
  let i = left;
  let j = middle + 1;

  const leftPart = arr.slice(i, j);
  const rightPart = arr.slice(j, right + 1);

  let n = 0;
  let m = 0;
  let x = i + 1;
  let y = j;

  arr[left].color = "#e6db74";
  arr[right - 1].color = "#e6db74";
  arr[middle].color = "gray";
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  while (x < middle && y < right - 1) {
    arr[x].color = "red";
    arr[y].color = "red";
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    arr[x].color = "#fff";
    arr[y].color = "#fff";
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);

    x += 1;
    y += 1;
  }
  arr[left].color = "#fff";
  arr[right - 1].color = "#fff";
  arr[middle].color = "#fff";
  await asyncSetTimeout({ timeout });
  setDataArray([...arr]);

  while (n <= leftPart.length - 1 && m <= rightPart.length - 1) {
    arr[k].color = "red";
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    arr[k].color = "#fff";
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    if (leftPart[n].height <= rightPart[m].height) {
      arr[k] = leftPart[n];
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      k += 1;
      n += 1;
      i += 1;

      continue;
    }
    if (leftPart[n].height >= rightPart[m].height) {
      arr[k] = rightPart[m];
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      k += 1;
      m += 1;
      j += 1;

      continue;
    }
  }

  while (n <= leftPart.length - 1) {
    // arr[k].color = "red";
    // await asyncSetTimeout({ timeout });
    // setDataArray([...arr]);
    // arr[k].color = "blue";
    // await asyncSetTimeout({ timeout });
    // setDataArray([...arr]);
    arr[k] = leftPart[n];
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    k += 1;
    n += 1;
    i += 1;
  }

  while (m <= rightPart.length - 1) {
    // arr[k].color = "red";
    // await asyncSetTimeout({ timeout });
    // setDataArray([...arr]);
    // arr[k].color = "blue";
    // await asyncSetTimeout({ timeout });
    // setDataArray([...arr]);
    arr[k] = rightPart[m];
    await asyncSetTimeout({ timeout });
    setDataArray([...arr]);
    k += 1;
    m += 1;
    j += 1;
  }
};

// const log = async (arr, setDataArray) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].color = "green";
//     await asyncSetTimeout({ timeout: 30 });
//     setDataArray([...arr]);

//     arr[i].color = "#fff";
//     await asyncSetTimeout({ timeout: 30 });
//     setDataArray([...arr]);
//   }
// };
