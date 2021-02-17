import { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import CarouselCard from "./CarouselCard";

const DATA = [
  {
    href: "#",
    src: "https://picsum.photos/seed/a/200/450",
    name: "기기네브라",
  },
  { href: "#", src: "https://picsum.photos/seed/b/200/450", name: "호온조옹" },
  {
    href: "#",
    src: "https://picsum.photos/seed/c/200/450",
    name: "브라키오사우르스",
  },
  {
    href: "#",
    src: "https://picsum.photos/seed/d/200/450",
    name: "귀귀",
  },
  {
    href: "#",
    src: "https://picsum.photos/seed/e/200/450",
    name: "기기네브라 혼종",
  },
  {
    href: "#",
    src: "https://picsum.photos/seed/f/200/450",
    name: "기기네브라 EX",
  },
];

// 총 슬라이드 횟수 설정
const TOTAL_SLIDE = 3;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.div`
  display: flex;
`;
const HeaderButton = styled.div`
  border-bottom: ${(p) => (p.clicked ? "1px solid " + p.theme.black : "none")};
  padding: 0 2px;

  &:last-child {
    margin-left: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  display: flex;
`;

const CarouselButton = styled.button``;
const RightButton = styled.button``;

const Carousel = () => {
  const [clicked, setClicked] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDE) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((p) => p + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(TOTAL_SLIDE);
    } else {
      setCurrentSlide((p) => p - 1);
    }
  };

  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Header>
        <HeaderButton clicked={clicked === 0} onClick={() => setClicked(0)}>
          NEW
        </HeaderButton>

        <HeaderButton clicked={clicked === 1} onClick={() => setClicked(1)}>
          BEST
        </HeaderButton>
      </Header>
      <Main>
        <CarouselButton onClick={prevSlide}>
          <ArrowBackIosOutlinedIcon />
        </CarouselButton>
        <CardContainer>
          {DATA.map((data) => (
            <CarouselCard src={data.src} />
          ))}
        </CardContainer>
        <CarouselButton onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </CarouselButton>
      </Main>
    </Wrapper>
  );
};

export default Carousel;
