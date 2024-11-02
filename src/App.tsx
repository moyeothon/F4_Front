// style
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
