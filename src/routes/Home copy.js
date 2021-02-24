import styled from "styled-components";
// import homeBanner from "../img/homeBanner.jpg";
// import home11 from "../img/home11.jpg";
// import home12 from "../img/home12.jpg";
// import home21 from "../img/home21.jpg";
// import home22 from "../img/home22.jpg";
// import home41 from "../img/home31.jpg";
// import home42 from "../img/home32.jpg";
// import home31 from "../img/home42.jpg";
// import home32 from "../img/home41.jpg";
// import Carousel from "../components/Carousel";
import Banner from "components/Banner";

const Wrapper = styled.div`
  width: 100vw;
  flex-grow: 1;
  margin-top: 94px;
`;

// const HomeBanner = styled.div`
//   margin-top: 94px;
//   width: 100vw;
//   height: 40vw;
//   background-image: url(${(p) => p.url});
//   background-size: cover;
//   background-repeat: no-repeat;
//   position: relative;

//   &:before {
//     content: "";
//     opacity: 0.1;
//     position: absolute;
//     right: 0;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     background-color: ${(p) => p.theme.black};
//   }
// `;

// const ImageSection = styled.section`
//   margin-top: 94px;
//   display: flex;
//   flex-wrap: nowrap;
// `;

// const ImagePressenter = ({ href, src, headerText, titleText, buttonText }) => {
//   return (
//     <a href={href}>
//       <ImageCard src={src}>
//         <ImageOverlay
//           headerText={headerText}
//           titleText={titleText}
//           buttonText={buttonText}
//         />
//       </ImageCard>
//     </a>
//   );
// };

const Home = () => {
  return (
    <Wrapper>
      {/* <HomeBanner url={homeBanner} /> */}
      {/* <ImageSection>
        <ImagePressenter
          src={[home11, home12]}
          headerText={"OLD"}
          titleText={
            <>
              블라우스 <br /> 코트
            </>
          }
          buttonText={"지금 보러가기"}
        />
        <ImagePressenter
          src={[home21, home22]}
          headerText={"NYC"}
          titleText={
            <>
              큐띠 쁘띠
              <br />
              후디
            </>
          }
          buttonText={"지금 보러가기"}
        />
        <ImagePressenter
          src={[home31, home32]}
          headerText={"TRIP"}
          titleText={<>시원한 여행</>}
          buttonText={"지금 보러가기"}
        />
        <ImagePressenter
          src={[home41, home42]}
          headerText={"CITY"}
          titleText={<>차가운 도시</>}
          buttonText={"지금 보러가기"}
        />
      </ImageSection> */}
      {/* <Carousel /> */}
      <Banner />
    </Wrapper>
  );
};

export default Home;
