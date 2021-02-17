import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  padding: 0 10%;
  width: 100%;
  height: 100%;
  z-index: 3;

  & * {
    color: ${(p) => p.color};
    border-color: ${(p) => p.color};

    transition: all 1s ease;
    opacity: 0;
    opacity: ${(p) => p.move === 0 && "1"};
  }
`;
const Link = styled.a`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: ${(p) => p.textLocation};
`;

const TitleWrap = styled.span`
  height: 4rem;
`;

const Title = styled.span`
  font-size: 1px;
  font-size: ${(p) => p.move === 0 && "3rem"};
  font-weight: bold;
  padding: 0.2em 1.7rem;
  margin: 10px 0;
  border-left: 0.4rem solid;
  border-right: 0.4rem solid;
`;

const Desc = styled.span`
  font-size: 1rem;
  margin: 0.3em 2.1rem;
`;

const Button = styled.button`
  margin: 0.5em 2.1rem;
  padding: 0 15px;
  line-height: 35px;
  font-size: 1rem;
  font-weight: 800;
  border: 1px solid;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const CardText = ({ data, move }) => {
  const { color, title, desc, href, textLocation = "flex-start" } = data;
  return (
    <Container color={color} move={move}>
      <Link href={href} textLocation={textLocation}>
        <TitleWrap>
          <Title move={move}>{title}</Title>
        </TitleWrap>
        <Desc>{desc}</Desc>
        <Button>지금 보러가기</Button>
      </Link>
    </Container>
  );
};

export default CardText;

CardText.prototype = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  textLocation: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
};
