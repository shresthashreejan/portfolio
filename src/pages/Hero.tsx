import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsFileEarmarkArrowDown } from "react-icons/bs";
import {
    opacityVariant,
    staggeredOpacityAndYVariant,
    opacityAndScaleVariant,
} from "../utils/motionVariants";

import Navbar from "../components/Navbar";
import AnimatedArrow from "../components/AnimatedArrow";

import Resume from "../assets/pdf/resume.pdf";

const Hero = () => {
    const text = "Shreejan Shrestha";
    const letters = text.split("");

    const scrollToSkills = () => {
        const projectsSection = document.getElementById("skills");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadResume = () => {
        const anchor = document.createElement("a");
        anchor.href = Resume;
        anchor.download = "Shreejan Shrestha's Resume.pdf";
        anchor.click();
    };

    return (
        <>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="flex flex-col">
                        <motion.div
                            variants={staggeredOpacityAndYVariant}
                            initial="initial"
                            animate="animate"
                            className="text-4xl md:text-9xl uppercase"
                        >
                            {letters.map((letter, index) => (
                                <motion.span
                                    variants={opacityVariant}
                                    key={index}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>

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

                            <a href="#">
                                <motion.button
                                    onClick={downloadResume}
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
                            onClick={scrollToSkills}
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
