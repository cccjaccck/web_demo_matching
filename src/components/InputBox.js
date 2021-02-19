import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.input`
  border: ${(p) => p.theme.border};
  background-color: white;
  width: ${(p) => p.width};
  height: ${(p) => p.height};

  &::placeholder {
    color: #333;
  }
`;
const InputBox = ({ placeholder, width, height }) => {
  return <Box placeholder={placeholder} width={width} height={height} />;
};

export default InputBox;

InputBox.prototype = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
