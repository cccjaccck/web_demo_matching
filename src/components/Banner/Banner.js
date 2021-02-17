import { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import CardText from "./CardText";
import Indicator from "./Indicator";
const DATA = [
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210208-A-fourm-03-.jpg?context=bWFzdGVyfGltYWdlc3w3MjAzNXxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaGQwLzkxODg0NzU5NjEzNzQuanBnfDk2MGVjNjVkZGQxNTNmYzhkZDYzMDk1NDYxOGQ0YTVhZTcyNjEyYTkxOGNjYmQ0YzNjNmNjNjYzNjg4MjUwY2M",
    title: "기기네브라",
    desc: "이건 개같은 디스크",
    textLocation: "center",
    color: "white",
  },
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210209-A-mine-06-.jpg?context=bWFzdGVyfGltYWdlc3w1MTYwMHxpbWFnZS9qcGVnfGltYWdlcy9oOGEvaDc3LzkxODg3NDUwMTk0MjIuanBnfDhiZDNiZGQ3MjVhOTM0NzlhZjI5ODVjZGZmZDdjYTdjM2M1ZTE3OTk5MDc3NzU4MGFlYjI0NDEzM2JjNmUxZDc",
    title: "호온조옹",
    desc: "이건 개같은 디스크",
    textLocation: "flex-start",
    color: "black",
  },
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210206-A-club-03.jpg?context=bWFzdGVyfGltYWdlc3wyNzExNXxpbWFnZS9qcGVnfGltYWdlcy9oN2IvaDQ2LzkxODgzNjYzODUxODIuanBnfDNlMTlkNjY1NzM3ZThjYmFhZGFiYzM2MTljZWFlMmEwNzI4ODBhMzYzNWI5OWVkZTlmMWY2MmEyMGZjMzBkNjQ",
    title: "브라키오사우르스",
    desc: "이건 개같은 디스크",
    textLocation: "flex-start",
    color: "black",
  },
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210113-A-tomfourm-04.jpg?context=bWFzdGVyfGltYWdlc3wxNTk2Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGJmL2gyMC85MTgyNzE3NTc1MTk4LmpwZ3w0MTliNDViNzM1NjA1NzA5YjRiZjE4ZWVkNTYwYmNkYmY2NDdmMTMwNzdiYTEwYmE3MjdhNDczZWY4Y2RlZWEz",
    title: "귀귀",
    desc: "이건 개같은 디스크",
    textLocation: "flex-start",
    color: "black",
  },
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210101-A-seasonoff-02-re-.jpg?context=bWFzdGVyfGltYWdlc3wxNDkwODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hjYS85MTg2OTQ4ODQxNTAyLmpwZ3xiNzk4MjAwOTNkNmE4YWNhOGMxYzk0YzcyNGNmZDBmMTU1NTI2ZmRhZmE5MTZlYWRhM2Q2MmU1OWY1Y2ExNzg2",
    title: "기기네브라 혼종",
    desc: "이건 개같은 디스크",
    textLocation: "center",
    color: "white",
  },
  {
    href: "#",
    src:
      "http://www.thehandsome.com/medias/210209-A-time-02.jpg?context=bWFzdGVyfGltYWdlc3wzMjM1NXxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDNkLzkxODg5NDQwODUwMjIuanBnfGRkNzk5NGUyNzhiYWYyMzU3YzY4OGQzZGM3MTYxZTE4Y2Q0NjQxNTI4NWExYzVjYzBlOTE5ZTBiMzBkODY4MWU",
    title: "기기네브라 EX",
    desc: "이건 개같은 디스크",
    textLocation: "flex-start",
    color: "black",
  },
];

const TOTAL_SLIDE = DATA.length;

const indexUp = (index) => {
  if (index >= TOTAL_SLIDE - 1) {
    return 0;
  } else {
    return index + 1;
  }
};
const indexDown = (index) => {
  if (index <= 0) {
    return TOTAL_SLIDE - 1;
  } else {
    return index - 1;
  }
};

const MARGIN_BETWEEN = "16px";

const Container = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`;

const Card = styled.div`
  width: 80vw;
  height: calc(80vw * 0.471);
  max-height: 480px;
  max-width: 1000px;
  position: relative;

  overflow: hidden;
  display: flex;

  background-image: url(${(p) => DATA[p.slide].src});

  background-size: cover;
  background-repeat: no-repeat;
`;
const CardImageContainer = styled.div`
  position: absolute;
  width: 300.3%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
`;
const CardImage = styled.div`
  display: inline-block;
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: calc(100% / 3);
  height: 100%;
  cursor: pointer;
`;

const Left = styled(Card)`
  margin-right: ${MARGIN_BETWEEN};
`;

const Right = styled(Card)`
  margin-left: ${MARGIN_BETWEEN};
`;

const Center = styled(Card)`
  z-index: -1;
`;

const LeftArrowContainer = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
`;
const RightArrowContainer = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
`;

const CardPressenter = ({ slide, move }) => {
  let moveAnim;
  if (move > 0) {
    moveAnim = {
      transition: "transform 1s ease 0s",
      transform: "translateX(calc(-100% / 3 - 50%))",
    };
  } else if (move < 0) {
    moveAnim = {
      transition: "transform 1s ease 0s",
      transform: "translateX(calc(100% / 3 - 50%))",
    };
  } else {
    moveAnim = undefined;
  }
  return (
    <CardImageContainer style={moveAnim}>
      <CardImage src={DATA[indexDown(slide)].src} />
      <CardImage
        src={DATA[slide].src}
        style={{ visibility: move !== 0 && "hidden" }}
      />
      <CardImage src={DATA[indexUp(slide)].src} />
    </CardImageContainer>
  );
};

let autoPlay = setInterval(() => null, 4000);

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideFast, setCurrentSlideFast] = useState(0);
  const [loading, setLoading] = useState(false);
  const [move, setMove] = useState(0);

  const nextSlide = () => {
    if (!loading) {
      setLoading(true);
      setCurrentSlideFast(indexUp(currentSlideFast));
      setMove(1);
      setTimeout(() => {
        setLoading(false);
        setMove(0);
        setCurrentSlide(indexUp(currentSlide));
      }, 1000);
    }
  };

  const prevSlide = () => {
    if (!loading) {
      setLoading(true);
      setCurrentSlideFast(indexDown(currentSlideFast));
      setMove(-1);
      setTimeout(() => {
        setLoading(false);
        setMove(0);
        setCurrentSlide(indexDown(currentSlide));
      }, 1000);
    }
  };

  const resetInterval = () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 4000);
  };

  useLayoutEffect(() => {
    resetInterval();
  }, [currentSlide]);

  return (
    <Container
      onMouseOver={() => clearInterval(autoPlay)}
      onMouseLeave={resetInterval}
    >
      <Left slide={indexDown(currentSlide)} move={move} onClick={prevSlide}>
        <CardPressenter slide={indexDown(currentSlide)} move={move} />
        <LeftArrowContainer>
          <ArrowBackIosOutlinedIcon style={{ color: "white" }} />
        </LeftArrowContainer>
      </Left>
      <Center slide={currentSlide}>
        <CardText data={DATA[currentSlide]} move={move} />
        <Indicator
          indicatorColor={"#fff"}
          totalSlide={TOTAL_SLIDE}
          currentSlide={currentSlideFast}
        />
        <CardPressenter slide={currentSlide} move={move} />
      </Center>
      <Right slide={indexUp(currentSlide)} move={move} onClick={nextSlide}>
        <CardPressenter slide={indexUp(currentSlide)} move={move} />
        <RightArrowContainer>
          <ArrowForwardIosOutlinedIcon style={{ color: "white" }} />
        </RightArrowContainer>
      </Right>
    </Container>
  );
};

export default Banner;

CardPressenter.prototype = {
  slide: PropTypes.number.isRequired,
  move: PropTypes.number.isRequired,
};
