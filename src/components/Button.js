import styled from "styled-components";

const Box = styled.button`
  width: ${(p) => p.width ?? "100%"};
  background-color: #4a4a4a;
  color: #fff;
  padding: 1em 0;
  text-align: center;
`;

const Button = ({ text, onClick }) => {
  return <Box onClick={onClick}>{text}</Box>;
};

export default Button;
