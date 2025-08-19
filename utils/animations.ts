// utils/animations.ts
import { Variants, MotionProps } from "framer-motion";

/* ---------------- Variants ---------------- */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

export const slideInLeft: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 }
};

export const slideInRight: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 }
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

/* ---------------- MotionProps ---------------- */
export const fadeInTransition: MotionProps = {
  transition: { duration: 0.5 }
};

export const cardHover: MotionProps = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};

export const cardHoverSmall: MotionProps = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 }
};

export const pageTransition: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};
