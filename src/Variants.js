export const containerVariants = {
  initial: { x: '-100vw', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      duration: 1.5,
    },
  },
  exit: {
    x: '-100vw',
    opacity: 0,
  },
};
