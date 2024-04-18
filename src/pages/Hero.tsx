import { motion } from "framer-motion";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import { opacityVariant } from "../utils/motionVariants";
import { staggeredOpacityAndYVariant } from "../utils/motionVariants";
import { opacityAndScaleVariant } from "../utils/motionVariants";

import Navbar from "../components/Navbar";
import AnimatedArrow from "../components/AnimatedArrow";

const Hero = () => {
    const text = "Shreejan Shrestha";
    const letters = text.split("");
    return (
        <>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="flex flex-col">
                        <motion.h1
                            variants={staggeredOpacityAndYVariant}
                            initial="initial"
                            animate="animate"
                            className="text-9xl uppercase"
                        >
                            {letters.map((letter, index) => (
                                <motion.span
                                    variants={opacityVariant}
                                    key={index}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <div className="btn-container flex justify-center p-4 gap-4">
                            <motion.button
                                variants={opacityAndScaleVariant}
                                initial="initial"
                                animate="animate"
                                className="tooltip tooltip-bottom"
                                data-tip="LinkedIn"
                            >
                                <BsLinkedin size={40} />
                            </motion.button>
                            <motion.button
                                variants={opacityAndScaleVariant}
                                initial="initial"
                                animate="animate"
                                className="tooltip tooltip-bottom"
                                data-tip="Github"
                            >
                                <BsGithub size={40} />
                            </motion.button>
                        </div>
                        <div className="flex justify-center">
                            <AnimatedArrow />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
