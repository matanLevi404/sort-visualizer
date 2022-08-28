import { asyncSetTimeout } from "./asyncSetTimeout";

export const checkthrough = async (arr, setDataArray, withGreen) => {
  if (withGreen) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].color = "green";
      await asyncSetTimeout({ timeout: 30 });
      setDataArray([...arr]);
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i].color = "#fff";
      await asyncSetTimeout({ timeout: 30 });
      setDataArray([...arr]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i].color = "#fff";
      await asyncSetTimeout({ timeout: 30 });
      setDataArray([...arr]);
    }
  }
};
