import { useState } from "react";

const useSlideIndex = (length) => {
  const [index, setIndex] = useState(0);
  if (index >= length) {
    setIndex(0);
  }
  if (index < 0) {
    setIndex(length - 1);
  }
  const up = () => setIndex(index + 1);
  const down = () => setIndex(index - 1);
  return {
    index,
    up,
    down,
  };
};

export default useSlideIndex;
