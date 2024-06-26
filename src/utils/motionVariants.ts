import { Variants } from "framer-motion";

export const opacityAndScaleVariant = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { delay: 1.8 } },
};

export const opacityVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export const opacityAndYVariant = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        },
    },
};

export const staggeredOpacityAndYVariant = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        },
    },
};

export const animatedDownArrowVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        y: [-10, 10],
        transition: {
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
            delay: 1,
        },
    },
};

export const fadeInFromYVariant = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export const fadeInFromYSlowVariant = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 1 * index,
        },
    }),
};

export const fadeInFadeOutVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5 } },
    exit: { opacity: 0 },
};
