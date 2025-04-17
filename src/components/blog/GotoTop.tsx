import { IconButton } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { LuArrowUpToLine } from "react-icons/lu";

const GotoTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <IconButton
      onClick={scrollToTop}
      variant="outline"
      aria-label="맨 위로"
      position="fixed"
      bottom="5%"
      right="5%"
      opacity={isVisible ? 1 : 0}
      visibility={isVisible ? "visible" : "hidden"}
      transition="opacity 0.3s, visibility 0.3s"
    >
      <LuArrowUpToLine />
    </IconButton>
  );
};

export default GotoTop;
