import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.input`
  border: ${(p) => p.theme.border};
  background-color: white;
  min-width: 200px;
  width: ${(p) => p.width ?? "100%"};
  height: ${(p) => p.height};
  border-radius: 2.5px;
  padding: 5px 10px;

  ::placeholder {
    color: #999;
  }

  :focus {
    outline: ${(p) => p.theme.borderSelected};
  }
`;
const InputBox = ({
  placeholder,
  width,
  height,
  onChange,
  value,
  style,
  type,
  ...props
}) => {
  return (
    <Box
      {...props}
      type={type}
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      onChange={onChange}
      style={style}
    />
  );
};

export default InputBox;

InputBox.prototype = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onChnage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "email",
    "file",
    "image",
    "number",
    "password",
    "radio",
    "submit",
    "tel",
    "text",
    "url",
  ]),
};
