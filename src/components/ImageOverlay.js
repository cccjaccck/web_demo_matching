import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    opacity: 0.45;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: -1;
  }
`;

const Text = styled.span`
  font-size: 15px;
  color: white;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0 0 5px gray;
`;

const Title = styled(Text)`
  font-size: 23px;
  margin-bottom: 14px;
`;

const Button = styled.div`
  border: 1px solid white;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color, 0.2s linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ButtonText = styled.a`
  padding: 15px;
  line-height: 35px;
  font-size: 15px;
  color: white;
  font-weight: 800;
`;

const ImageOverlay = ({ headerText, titleText, buttonText }) => {
  return (
    <Wrapper>
      <Text>{headerText}</Text>
      <Title>{titleText}</Title>
      <Button>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </Wrapper>
  );
};
export default ImageOverlay;

ImageOverlay.prototype = {
  headerText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
