import { useState, useCallback } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MenuMore from "./MenuMore";

import best1 from "../../img/best1.jpg";
import best2 from "../../img/best2.jpg";
import best3 from "../../img/best3.jpg";

const DATA = {
  first: {
    img: best1,
    title: "CLOTHES",
    subs: ["아우터", "탑", "드레스", "팬츠", "스커트"],
  },
  second: {
    img: best2,
    title: "SHOOES & BOOTS",
    subs: ["구두", "운동화", "캐주얼", "플랫", "단화"],
  },
  third: {
    img: best3,
    title: "BAG & ACC",
    subs: ["핸드 & 클러치", "숄더", "목걸이", "반지", "팔찌 & 발찌"],
  },
};

const List = styled.ul`
  height: 100%;
  margin-left: auto;
  list-style: none;
  display: flex;
  width: 50vw;
  max-width: 500px;
  justify-content: space-around;
`;

const ListItem = styled.li`
  display: flex;
  width: 15%;
  min-width: 50px;
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
  font-size: 13px;
  line-height: 13px;

  transition: color 0.1s linear;
  &:hover {
    color: ${(p) => p.theme.lightApricot};
  }
`;

const Menu = () => {
  const [showMore, setShowMore] = useState();

  const onMouseOver = useCallback((i) => setShowMore(i), []);
  const onMouseOut = useCallback(
    (i) => setShowMore((p) => (p === i ? null : p)),
    []
  );

  return (
    <List>
      <ListItem
        onMouseOver={() => onMouseOver(0)}
        onMouseOut={() => onMouseOut(0)}
      >
        <Button href="#" hover={showMore === 0}>
          베스트
        </Button>
        <MenuMore data={DATA} hover={showMore === 0} />
      </ListItem>
      <ListItem
        onMouseOver={() => onMouseOver(1)}
        onMouseOut={() => onMouseOut(1)}
      >
        <Button href="#" hover={showMore === 1}>
          카테고리
        </Button>
        <MenuMore data={DATA} hover={showMore === 1} />
      </ListItem>
      <ListItem>
        <Button href="#">컨텍트</Button>
      </ListItem>
      <ListItem style={{ width: "unset" }}>
        <SearchIcon style={{ justifySelf: "flex-end", flexShrink: 1 }} />
      </ListItem>
    </List>
  );
};
export default Menu;
