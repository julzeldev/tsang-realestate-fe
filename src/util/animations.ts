export const fadeInVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const slideFromRightVariants = {
  hidden: { opacity: 0, x: 125 }, // Start off-screen to the right
  visible: (i: number) => ({
    opacity: 1,
    x: 0, // Slide into view
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const growInVariants = {
  hidden: { opacity: 0, scale: 0 }, // Start with 0 opacity and 0 scale
  visible: (i: number) => ({
    opacity: 1,
    scale: 1, // Grow to full size
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};
