// components/ScrambleText.jsx
import React from "react";
import { useScramble } from "use-scramble";

const Scramble = ({ text, className = "", playOnMount = true }) => {
  const { ref, replay } = useScramble({
    text,
    playOnMount,
    speed: 0.4, // Slower speed (default is 1)
    tick: 2, // Higher tick value slows the update frequency
    step: 1, // Lower step value increases animation length
    scramble: 4, // Number of scramble characters
  });

  return (
    <span
      ref={ref}
      onMouseOver={replay}
      onMouseOut={replay}
      className={className}
    />
  );
};

export default Scramble;
