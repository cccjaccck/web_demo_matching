import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;
const Link = styled.a`
  flex-grow: 1;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 20%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 2em;
`;
const Desc = styled.p`
  font-size: 1.3em;
`;

const EventBanner = ({}) => {
  const data = {
    left: {
      src:
        "http://www.thehandsome.com/medias/210208-rochas-sale.jpg?context=bWFzdGVyfGltYWdlc3wyMjA2N3xpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDRlLzkxODg1MjA3MjI0NjIuanBnfDQzN2FiODEyY2U2NDdjYWY1Yjg1MTQyMjU3YjE5MmYzZDUxM2I5MjJlYjBhN2Q4MDlhYWI4MDg2OWFhYTI2ZjI",
      href: "#",
      title: "띵샨스 윈터 섬머 카",
      desc: "띵띠리딩하게 노는 나",
    },
    right: {
      src:
        "http://www.thehandsome.com/medias/210210-1-2-things-01-.jpg?context=bWFzdGVyfGltYWdlc3wxMTc5M3xpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDQ4LzkxOTA0NTYyMjk5MTguanBnfGExY2U5NDNlNTEyMmE4NjlhYWJmYmE4YTE3NGFlOGQ2ZTRjZjVjMDk5Zjk4MWE5ZmU2MTI1MDBhZjFhOTBkOGU",
      href: "#",
      title: "윈터윈터 크크루삥뿅",
      desc: "루삥봉창이 칼국수",
    },
  };
  const { left, right } = data;
  return (
    <Wrapper>
      <Link href={left.href} style={{ marginRight: "1px" }}>
        <TextBox>
          <TextContainer>
            <Title>{left.title}</Title>
            <Desc>{left.desc}</Desc>
          </TextContainer>
        </TextBox>
        <Image src={left.src} />
      </Link>
      <Link href={right.href}>
        <TextBox style={{ justifyContent: "flex-end" }}>
          <TextContainer>
            <Title>{right.title}</Title>
            <Desc>{right.desc}</Desc>
          </TextContainer>
        </TextBox>
        <Image src={right.src} />
      </Link>
    </Wrapper>
  );
};

export default EventBanner;
