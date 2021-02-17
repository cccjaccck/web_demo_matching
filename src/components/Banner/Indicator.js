import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  z-index: 3;
  bottom: 5%;
  justify-content: center;

  & span {
    background-color: ${(p) => p.indicatorColor};
  }
`;

const Bar = styled.span`
  opacity: ${(p) => (p.currentSlide === p.index ? 1 : 0.8)};
  width: ${(p) => (p.currentSlide === p.index ? "6px" : "2px")};
  height: 10px;
  margin-right: 4px;

  transition: width 0.3s linear;

  &:last-child {
    margin-right: unset;
  }
`;

const Indicator = ({ currentSlide, totalSlide, indicatorColor = "#000" }) => {
  return (
    <Container indicatorColor={indicatorColor}>
      {[...Array(totalSlide).keys()].map((i) => (
        <Bar key={i} index={i} currentSlide={currentSlide} />
      ))}
    </Container>
  );
};

export default Indicator;

Indicator.prototype = {
  currentSlide: PropTypes.number.isRequired,
  totalSlide: PropTypes.number.isRequired,
  indicatorColor: PropTypes.string,
};
