import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    lightGrey: "#475467",
    divider: "#EAECF0",
    warningOrange: "#F79009",
    btnBorderGrey: "#D0D5DD",
    red: "#F04438",
    grey100: "#F2F4F7",
  },
  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
  },
});
