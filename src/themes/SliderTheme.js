import { createTheme } from "@mui/material";

export const sliderTheme = createTheme({
  components: {
    // Name of the component
    MuiSlider: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          width: "150px",
          "& .MuiSlider-thumb": {
            width: "12px",
            height: "12px",
            backgroundColor: "#1a2027",
            borderRadius: "0px",
            top: "100%",
            boxShadow: "none",
            ":hover": { boxShadow: "0px 0px 0px 5px rgba(225, 225, 225, 0.3)" },
          },
          "& .css-1mj13oq-MuiSlider-root": {
            color: "#fff",
          },
          "& .MuiSlider-mark": {
            color: "#1a2027",
            top: "100%",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#1a2027",
            top: "100%",
            height: "4px",
          },

          "& .MuiSlider-rail": {
            backgroundColor: "#1a2027",
            top: "100%",
            height: "4px",
          },

          "& .MuiSlider-valueLabel": {
            backgroundColor: "#1a2027",
            fontSize: "10px",
          },

          "& .css-1kz0hui-MuiSlider-valueLabel": {
            padding: "0.25rem 0.5rem",
          },
        },
      },
    },
  },
});
