import React from "react";
import { MotionConfig, motion } from "framer-motion";

const HamburgerButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.15,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={setActive}
        className="relative h-5 w-4 transition-colors z-40"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[.1rem] w-[1rem] bg-white rounded-full"
          style={{ x: "-50%", y: "-50%", left: "50%", top: "25%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[.1rem] w-[1rem] bg-white rounded-full"
          style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[.1rem] w-[1rem] bg-white rounded-full"
          style={{ x: "-50%", y: "-50%", left: "50%", top: "75%" }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["25%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "25%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["75%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "75%"],
      left: "50%",
    },
  },
};

export default HamburgerButton;