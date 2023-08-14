import React from "react";
import { Avatar } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt, width, height }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} 
      transition={{ duration: 0.3 }} 
    >
      {inView && (
        <Avatar variant="square" src={src} alt={alt} sx={{ width, height }} />
      )}
    </motion.div>
  );
};

export default LazyImage;
