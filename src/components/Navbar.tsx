import { motion } from "framer-motion";
import ThemeController from "./ThemeController";
import { opacityAndScaleVariant } from "../utils/motionVariants";

const Navbar = () => {
    return (
        <>
            <motion.div
                variants={opacityAndScaleVariant}
                initial="initial"
                animate="animate"
                className="absolute top-2 right-2"
            >
                <ThemeController />
            </motion.div>
        </>
    );
};

export default Navbar;
