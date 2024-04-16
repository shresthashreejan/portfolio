export const opacityAndScaleVariant = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { delay: 1.8 } },
};

export const opacityVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};

export const staggeredOpacityAndYVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
