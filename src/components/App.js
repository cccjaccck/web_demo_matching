import AppRouter from "./Router";
import Footer from "./Footer.js";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";

const Wrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <AppRouter />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
