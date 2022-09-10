import { BubbleSort } from "../algo/BubbleSort";
import { QuickSort } from "../algo/QuickSort";
import { MergeSort } from "../algo/MergeSort";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectionSort } from "../algo/SelectionSort";
import { selectTheme } from "../themes/SelectTheme";
import Button from "@mui/material/Button";
import { useState } from "react";
import { buttonTheme } from "../themes/ButtonTheme";
import Slider from "@mui/material/Slider";
import { sliderTheme } from "../themes/SliderTheme";
import { Typography } from "@mui/material";
import { typographyTheme } from "../themes/TypographyTheme";
import { menuItemTheme } from "../themes/MenuItemTheme";

export default function NavBar({
  dataArray,
  setDataArray,
  generateArray,
  maxHeight,
}) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [sortMethod, setSortMethod] = useState("selection");
  const [timeout, setTimeout] = useState(30);

  const animate = async () => {
    setIsAnimated(true);
    if (!isAnimated) {
      switch (sortMethod) {
        case "selection":
          await SelectionSort(dataArray, setDataArray, timeout);
          break;
        case "bubble":
          await BubbleSort(dataArray, setDataArray, timeout);
          break;
        case "quick":
          await QuickSort(dataArray, setDataArray, timeout);
          break;
        case "merge":
          await MergeSort(dataArray, setDataArray, timeout);
          break;

        default:
          break;
      }

      setIsAnimated(false);
    }
  };

  return (
    <div className="navbar">
      <Typography variant="h6" component="div" theme={typographyTheme}>
        Sort-Visualizer
        <span class="material-symbols-outlined">grouped_bar_chart</span>
      </Typography>
      <div className="divider">
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
          }}
        >
          <Select
            displayEmpty
            disabled={isAnimated}
            inputProps={{ "aria-label": "Without label" }}
            defaultValue={sortMethod}
            theme={selectTheme}
            onChange={(e) => setSortMethod(e.target.value)}
          >
            <MenuItem theme={menuItemTheme} value="selection">
              Selection
            </MenuItem>
            <MenuItem theme={menuItemTheme} value="bubble">
              Bubble
            </MenuItem>
            <MenuItem theme={menuItemTheme} value="quick">
              Quick
            </MenuItem>
            <MenuItem theme={menuItemTheme} value="merge">
              Merge
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          disabled={isAnimated}
          theme={buttonTheme}
          onClick={animate}
        >
          Sort
        </Button>
        <div>
          <Slider
            theme={sliderTheme}
            size="small"
            min={30}
            max={300}
            defaultValue={100}
            aria-label="Small"
            valueLabelDisplay="auto"
            disabled={isAnimated}
            onChange={(e) => {
              let arr = generateArray({ arraySize: e.target.value, maxHeight });
              setDataArray(arr);
            }}
          />
          <div
            className="under-label"
            style={
              isAnimated
                ? {
                    textDecoration: "line-through #1a2027 2px",
                    color: "rgba(26, 32, 39, 0.6)",
                  }
                : { textDecoration: "none" }
            }
          >
            Quantity
          </div>
        </div>
        <div>
          <Slider
            theme={sliderTheme}
            aria-label="Temperature"
            defaultValue={timeout}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={200}
            disabled={isAnimated}
            onChange={(e) => setTimeout(e.target.value)}
          />
          <div
            className="under-label"
            style={
              isAnimated
                ? {
                    textDecoration: "line-through #1a2027 2px",
                    color: "rgba(26, 32, 39, 0.6)",
                  }
                : { textDecoration: "none" }
            }
          >
            Speed
          </div>
        </div>
      </div>
    </div>
  );
}
