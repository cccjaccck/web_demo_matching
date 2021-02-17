import styled from "styled-components";

import Banner from "../components/Banner/Banner";

const Wrapper = styled.div`
  width: 100vw;
  flex-grow: 1;
  margin-top: 94px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Banner />
    </Wrapper>
  );
};

export default Home;
