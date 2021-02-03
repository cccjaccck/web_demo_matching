import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  position: absolute;
  width: 100vw;
  bottom: 0;
  background-color: ${(p) => p.theme.khaki};
  color: ${(p) => p.theme.yellow};
  padding: 40px 25px;
`;

const InfoContainer = styled.section`
  padding-right: 40px;
  border-right: 1px solid ${(p) => p.theme.yellow};
`;

const Info = styled.ul`
  list-style: none;
  line-height: 20px;
`;
const InfoTitle = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
`;
const InfoText = styled.li`
  font-size: 12px;
`;

const Text = styled.span``;

const Footer = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Info>
          <InfoTitle>&copy; Thinction</InfoTitle>
          <InfoText>사업자등록번호 : 000-00-00000</InfoText>
          <InfoText>0000-0000 | help@thinction.com</InfoText>
        </Info>
      </InfoContainer>
    </Wrapper>
  );
};

export default Footer;
