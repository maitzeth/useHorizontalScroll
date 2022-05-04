import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
  const ref = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    ref.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("wheel", handleScroll);
    }
  }, [ref]);

  return { ref };
};

export default useHorizontalScroll;
