import styled, { ThemeProvider } from "styled-components";
import AppRouter from "./Router";
import Footer from "./Footer";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import { AuthProvider } from "../AuthContext";
import { authService } from "../myFirebase";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;
`;

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
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
