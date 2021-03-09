import styled, { ThemeProvider } from "styled-components";
import AppRouter from "./Router";
import Footer from "./Footer";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import { AuthProvider } from "../AuthContext";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 94px;
`;

function App() {
  const [init, setInit] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider setInit={setInit}>
        <Wrapper>
          {init ? (
            <>
              <Header />
              <AppRouter />
            </>
          ) : (
            "Loadding..."
          )}
          <Footer />
        </Wrapper>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
