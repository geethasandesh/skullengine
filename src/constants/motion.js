export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = (delay = 0.1, interval = 0.06) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: interval,
    },
  },
});


