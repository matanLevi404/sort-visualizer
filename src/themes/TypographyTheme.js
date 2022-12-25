import { createTheme } from "@mui/material";

export const typographyTheme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#1a2027",
          fontFamily: "Russo One,sans-serif",
          fontSize: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
  },
});
