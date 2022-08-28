import { createTheme } from "@mui/material";

export const buttonTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "0px",
          height: "30px",
          width: "120px",
          backgroundColor: "#1a2027",
          textTransform: "capitalize",
          boxShadow: "none",
          ":hover": {
            backgroundColor: "rgba(26, 32, 39, 0.85)",
            boxShadow: "0px 0px 0px 5px rgba(225, 225, 225, 0.3)",
          },
        },
      },
    },
  },
});
