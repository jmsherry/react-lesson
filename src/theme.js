import { createTheme } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: '#3352cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
// const theme = createTheme({
//   palette: {
//     background: {
//       paper: {
//         main: "#fff",
//       },
//     },
//     text: {
//       primary: {
//         main: "#173A5E",
//       },
//       secondary: {
//         main: "#46505A",
//       },
//     },
//     action: {
//       active: {
//         main: "#001E3C",
//       },
//     },
//     success: {
//       dark: {
//         main: "#009688",
//       },
//     },
//   },
// });

export default theme;
