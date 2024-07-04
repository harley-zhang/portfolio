import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import EcoForecast from "../assets/ecoforecast.png";
import SimpleWeather from "../assets/simpleweather.png";
import portfolio from "../assets/portfolio.png";

const images = [
  { src: EcoForecast, title: "EcoForecast" },
  { src: SimpleWeather, title: "SimpleWeather" },
  { src: portfolio, title: "Portfolio" },
];

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const DRAG_BUFFER = 50;

const Projects = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const targetRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollXProgress, [0, 1], ["0%", `-${(images.length - 1) * 100}%`]);

  useEffect(() => {
    dragX.onChange((latestX) => {
      if (latestX <= -DRAG_BUFFER && imgIndex < images.length - 1) {
        setImgIndex((pv) => pv + 1);
      } else if (latestX >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - 1);
      }
    });
  }, [dragX, imgIndex]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section id="projects" ref={targetRef} className="relative h-screen bg-neutral-900 overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ x }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex h-full items-center cursor-grab active:cursor-grabbing"
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-screen h-full"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
