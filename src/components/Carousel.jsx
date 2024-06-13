import { useState, useEffect, useRef } from "react";

const Carousel = ({items, indicatorColor="#AAA", delay=5000}) => {
  const scrollableDivRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!intervalRef.current && !stopped) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, delay);
    }

    if (stopped && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (scrollableDivRef.current) {
      const parent = scrollableDivRef.current;
      const parentLeft = parent.getBoundingClientRect().width;
      parent.style.translate = `${-parentLeft * index}px`;
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [index, stopped]);

  return (
    <div className="overflow-hidden max-h-[800px] p-4">
      <div
        className="w-full flex transition-all duration-[1500ms]"
        ref={scrollableDivRef}
      >
        {items.map((item) => (
          <div className="w-full flex-none relative">
            <div
              onMouseEnter={() => setStopped(true)}
              onMouseLeave={() => setStopped(false)}
              className=" absolute inset-0 p-8 md:px-16 py-8"
              >
            </div>
        {item}
          </div>
        ))}

      </div>
      <div className="flex gap-4  justify-center mt-4">
        {items.map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            className={`transition-all duration-500 h-1 md:h-2 rounded-full cursor-pointer ${
              i === index && !stopped
                ? "scale-[1.20] bg-[#FBBB40]"
                : ""
            } ${stopped ? "w-1 md:w-2" : "w-8 md:w-16"}`}
            style={{ backgroundColor: !(i === index && !stopped) ? indicatorColor : undefined}}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;