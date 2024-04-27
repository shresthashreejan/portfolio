import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { animatedDownArrowVariant } from "../utils/motionVariants";

const AnimatedArrow = () => (
    <motion.div
        variants={animatedDownArrowVariant}
        initial="initial"
        animate="animate"
        className="mt-4 cursor-pointer"
    >
        <BsChevronDoubleDown size={40} />
    </motion.div>
);

export default AnimatedArrow;
