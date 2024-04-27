import { motion } from "framer-motion";

import { fadeInFromYVariant } from "../utils/motionVariants";

import skills from "../data/json/skills.json";

const Skills = () => {
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
                            className="btn md:text-lg font-normal cursor-default"
                            key={index}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Skills;
