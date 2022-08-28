import { asyncSetTimeout } from "../helpers/asyncSetTimeout";
import { checkthrough } from "../helpers/checkThrough";

export const BubbleSort = async (dataArray, setDataArray, timeout) => {
  let arr = [...dataArray];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      arr[j + 1].color = "gray";
      arr[j].color = "gray";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);

      let temp = arr[j + 1];
      if (temp.height < arr[j].height) {
        arr[j + 1].color = "red";
        arr[j].color = "red";
        arr[j + 1] = arr[j];
        arr[j] = temp;
        await asyncSetTimeout({ timeout });
        setDataArray([...arr]);
      }

      arr[j + 1].color = "#fff";
      arr[j].color = "#fff";
      await asyncSetTimeout({ timeout });
      setDataArray([...arr]);
    }
    arr[arr.length - 1 - i].color = "green";
    await asyncSetTimeout({ timeout: 0 });
    setDataArray([...arr]);
  }

  await checkthrough(arr, setDataArray, false);
};
