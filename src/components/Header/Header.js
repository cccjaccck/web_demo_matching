import styled from "styled-components";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import logo from "../../img/logo.png";
import Menu from "./Menu";

const Wrapper = styled.section`
  position: fixed;
  width: 100vw;
  top: 0;
  padding: 0px 20px;
  background-color: white;
  z-index: 999;
  min-width: 995px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* width: 60%; */
  min-width: 995px;
  max-width: 1205px;
  height: 60px;
`;

const LogoContainer = styled.a`
  height: 100%;
  display: block;
  padding: 20px 0px;
  &:hover {
    cursor: pointer;
  }
`;
const Logo = styled.img`
  height: 100%;
  resize: contain;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: ${(p) => p.theme.border};
  padding: 3px 10px;
`;

const TopText = styled.span`
  margin-right: 5px;
`;

const TopIcon = styled.span`
  /* maring-left: auto; */
`;

const Header = () => {
  return (
    <Wrapper>
      <Top>
        <TopText>Guest</TopText>
        <TopIcon>
          <LocalMallOutlinedIcon />
        </TopIcon>
      </Top>
      <Main>
        <LogoContainer href="/">
          <Logo src={logo} />
        </LogoContainer>
        <Menu />
      </Main>
    </Wrapper>
  );
};

export default Header;
