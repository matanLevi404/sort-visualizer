import { createTheme } from "@mui/material";

export const selectTheme = createTheme({
  components: {
    // Name of the component
    MuiSelect: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "0px",
          backgroundColor: "#1a2027",
          height: "30px",
          color: "#fff",
        },
      },
    },
  },
});
