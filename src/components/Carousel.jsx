import { useState, useEffect, useRef } from "react";

const Carousel = ({items}) => {
  const scrollableDivRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (!intervalRef.current && !stopped) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, 3000);
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
    <div className="overflow-hidden max-h-[800px] rounded-lg">
      <div
        className="w-full flex transition-all duration-900"
        ref={scrollableDivRef}
      >
        {items.map((item) => (
          <div className="w-full flex-none relative">
            <div
              onMouseEnter={() => setStopped(true)}
              onMouseLeave={() => setStopped(false)}
              className=" absolute inset-0 hover:opacity-70 bg-black opacity-0 transition-opacity p-8 md:px-16 py-8"
              >
              <h1 className="text-center font-bold text-md md:text-xl">Test</h1>
              <p className="mt-4 text-sm md:text-base">Testing</p>
            </div>
        {item}
          </div>
        ))}

      </div>
      <div className="flex gap-4  justify-center mt-4">
        {items.map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            className={` bg-black transition-all duration-500 h-1 md:h-2 rounded-full cursor-pointer ${
              i === index && !stopped
                ? "scale-[1.20]  carousel-button-load"
                : ""
            } ${stopped ? "w-1 md:w-2" : "w-8 md:w-16"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;