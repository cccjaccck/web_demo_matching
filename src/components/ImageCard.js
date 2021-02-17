import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.div`
  background-image: url(${(p) => p.src[0]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 40vw;
  width: 25vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;

  transition: all 0.3s ease;
  & * {
    visibility: hidden;
    transition: opacity 0.3s ease;
  }
  &:hover {
    background-image: url(${(p) => p.src[1]});
    & * {
      visibility: visible;
    }
  }
`;

const ImageCard = ({ children, style, src }) => {
  return (
    <Image style={style} src={src}>
      {children}
    </Image>
  );
};

export default ImageCard;

ImageCard.prototype = {
  children: PropTypes.any,
  style: PropTypes.object,
  src: PropTypes.arrayOf(PropTypes.string),
};
