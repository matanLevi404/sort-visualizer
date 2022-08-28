import { createTheme } from "@mui/material";

export const menuItemTheme = createTheme({
  components: {
    // Name of the component
    MuiMenuItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#fff",
          transition: "0.3s all",
          ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },
  },
});
