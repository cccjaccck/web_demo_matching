import myFirebase from "../myFirebase";
import AppRouter from "./Router";
import Footer from "./Footer.js";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import { AuthProvider } from "../AuthContext";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Wrapper>
          <Header />
          <AppRouter />
          <Footer />
        </Wrapper>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
