import { motion } from "framer-motion";

import {
    opacityAndYVariant,
    fadeInFromYVariant,
} from "../utils/motionVariants";

import skills from "../data/json/skills.json";
import AnimatedArrow from "../components/AnimatedArrow";

const Skills = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex justify-center py-12 px-4 md:px-24">
                <motion.h1
                    variants={opacityAndYVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl uppercase"
                >
                    skills
                </motion.h1>
            </div>

            <div className="flex justify-center">
                <ul className=" flex justify-center flex-wrap gap-4 w-1/2">
                    {skills.map((item, index) => (
                        <motion.li
                            variants={fadeInFromYVariant}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            className="btn text-lg cursor-default"
                            key={index}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div
                className="flex justify-center my-4"
                onClick={scrollToProjects}
            >
                <AnimatedArrow />
            </div>
        </>
    );
};

export default Skills;
