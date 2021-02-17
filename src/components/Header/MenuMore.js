import PropTypes from "prop-types";
import styled from "styled-components";

import event from "../../img/event.jpg";
import ImageOverlay from "../ImageOverlay";

const Wrapper = styled.div`
  position: absolute;
  top: 90px;
  width: fit-content;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 20px;
  box-shadow: 0.2px 0.2px 1px 1px rgba(0, 0, 0, 0.1);

  background-color: white;

  transition: all 0.2s ease;
  opacity: ${(p) => (p.hover ? 1 : 0)};
  transform: translateY(${(p) => (p.hover ? 0 : "10px")});
  visibility: ${(p) => (p.hover ? "visible" : "hidden")};
`;

const Image = styled.div`
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-repeat: no-repeat;
  width: 20vw;
  height: 12vw;
  box-shadow: 0 0 1px 1px white inset;
`;

const Section = styled.section`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 18px;
  padding-bottom: 12px;
  border-bottom: ${(p) => p.theme.border};
  text-align: left;
`;

const TitleText = styled.a`
  font-weight: bold;
`;

const SubWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 12px;
`;

const Sub = styled.div`
  margin-bottom: 12px;
`;

const SubText = styled.a`
  color: ${(p) => p.theme.black};
  opacity: 1;
  font-size: 13px;

  transition: color 0.1s linear;

  &:hover {
    color: ${(p) => p.theme.lightApricot};
  }
`;

const Event = styled.section`
  background-image: url(${(p) => p.src});
  background-size: cover;
  background-repeat: no-repeat;
  align-self: stretch;
  width: 20vw;
  box-shadow: 0 0 1px 1px white inset;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionPressenter = ({ data }) => {
  const { img, title, subs } = data;
  return (
    <Section>
      <Image url={img} />
      <Title>
        <TitleText>{title}</TitleText>
      </Title>
      <SubWrap>
        {subs.map((sub) => (
          <Sub>
            <SubText>{sub}</SubText>
          </Sub>
        ))}
      </SubWrap>
    </Section>
  );
};

const MenuMore = ({ data, hover }) => {
  const { first, second, third } = data;
  return (
    <Wrapper hover={hover}>
      <SectionPressenter data={first} />
      <SectionPressenter data={second} />
      <SectionPressenter data={third} />
      <Event src={event}>
        <ImageOverlay
          headerText="THINC's COLLECTION"
          titleText={
            <>
              SALE UP TO
              <br /> 30% OFF
            </>
          }
          buttonText="지금 보러가기"
        />
      </Event>
    </Wrapper>
  );
};

export default MenuMore;

SectionPressenter.prototype = {
  data: PropTypes.object.isRequired,
};

MenuMore.prototype = {
  data: PropTypes.object.isRequired,
  hover: PropTypes.bool.isRequired,
};
