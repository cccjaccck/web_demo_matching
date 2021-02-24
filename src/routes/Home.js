import styled from "styled-components";
import { useIsLoggedIn } from "../AuthContext";

import Banner from "../components/Banner";
import EventBanner from "../components/EeventBanner";

const Wrapper = styled.div`
  width: 100vw;
  flex-grow: 1;
  margin-top: 94px;
  max-width: 1205px;
`;

const BannerContainer = styled.section`
  position: relative;
  height: calc(80vw * 0.471);
  max-height: 480px;
  margin-bottom: 50px;
`;

const Home = () => {
  const isLogin = useIsLoggedIn();
  console.log("islogin", isLogin);
  return (
    <Wrapper>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <EventBanner />
    </Wrapper>
  );
};

export default Home;
