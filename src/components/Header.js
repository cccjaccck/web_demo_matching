import styled from "styled-components";
import logo from "../img/logo.png";

const Wrapper = styled.section`
  position: sticky;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 40px;
  top: 0;
  background-color: ${(p) => p.theme.lightYellow};
  color: ${(p) => p.theme.darkBrown};
  padding: 0px 10px;
`;

const Menu = styled.ul`
  height: 100%;
  margin-left: auto;
  list-style: none;
  display: flex;
  width: 60vw;
  max-width: 500px;
  justify-content: space-around;
`;

const MenuItem = styled.li`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`;

const Button = styled.a`
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 16px;
  color: #707070;

  &:hover {
    color: ${(p) => p.theme.darkBrown};
  }
`;

const Logo = styled.img`
  height: 50%;
  resize: contain;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Menu>
        <MenuItem>
          <Button href="#">홈</Button>
        </MenuItem>
        <MenuItem>
          <Button href="#">상품보기</Button>
        </MenuItem>
        <MenuItem>
          <Button href="#">컨텍트</Button>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Header;
