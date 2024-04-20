import { motion } from "framer-motion";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

import { opacityVariant } from "../utils/motionVariants";
import { staggeredOpacityAndYVariant } from "../utils/motionVariants";
import { opacityAndScaleVariant } from "../utils/motionVariants";

import Navbar from "../components/Navbar";
import AnimatedArrow from "../components/AnimatedArrow";

const Hero = () => {
    const text = "Shreejan Shrestha";
    const letters = text.split("");

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                            <a
                                href="https://github.com/shresthashreejan"
                                target="_blank"
                            >
                                <motion.button
                                    variants={opacityAndScaleVariant}
                                    initial="initial"
                                    animate="animate"
                                    className="tooltip tooltip-bottom"
                                    data-tip="Github"
                                >
                                    <BsGithub size={40} />
                                </motion.button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shreejanshrestha/"
                                target="_blank"
                            >
                                <motion.button
                                    variants={opacityAndScaleVariant}
                                    initial="initial"
                                    animate="animate"
                                    className="tooltip tooltip-bottom"
                                    data-tip="LinkedIn"
                                >
                                    <BsLinkedin size={40} />
                                </motion.button>
                            </a>
                            <a
                                href="https://github.com/shresthashreejan"
                                target="_blank"
                            >
                                <motion.button
                                    variants={opacityAndScaleVariant}
                                    initial="initial"
                                    animate="animate"
                                    className="tooltip tooltip-bottom"
                                    data-tip="Resume"
                                >
                                    <BsFileEarmarkArrowDown size={40} />
                                </motion.button>
                            </a>
                        </div>
                        <div
                            className="flex justify-center"
                            onClick={scrollToProjects}
                        >
                            <AnimatedArrow />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
