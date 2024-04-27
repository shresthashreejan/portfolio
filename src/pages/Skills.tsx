import { motion } from "framer-motion";

import { fadeInFromYVariant } from "../utils/motionVariants";

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
                <h1 className="text-4xl md:text-6xl uppercase header-text">
                    Skills
                </h1>
            </div>

            <div className="flex justify-center">
                <ul className=" flex justify-center flex-wrap gap-4 w-full px-2 md:w-1/2">
                    {skills.map((item, index) => (
                        <motion.li
                            variants={fadeInFromYVariant}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            className="btn text-lg font-normal cursor-default"
                            key={index}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div
                className="flex justify-center my-4 invisible md:visible"
                onClick={scrollToProjects}
            >
                <AnimatedArrow />
            </div>
        </>
    );
};

export default Skills;
