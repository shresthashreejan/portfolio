import { motion } from "framer-motion";

import {
    opacityAndYVariant,
    fadeInFromYVariant,
} from "../utils/motionVariants";

import skills from "../data/json/skills.json";

const Skills = () => {
    return (
        <>
            <div className="flex justify-center py-12 px-4 md:px-24">
                <h1 className="text-4xl md:text-6xl uppercase header-text">
                    Skills
                </h1>
            </div>

            <div className="flex justify-center px-4 md:px-24">
                <motion.div
                    variants={opacityAndYVariant}
                    initial="initial"
                    whileInView="animate"
                    className="border-t-2 border-opacity-5 h-[80vh] py-12 overflow-y-auto px-2 md:px-0"
                >
                    <div className="flex justify-center">
                        <ul className=" flex justify-center flex-wrap gap-4 w-full px-2 md:w-1/2">
                            {skills.map((item, index) => (
                                <motion.li
                                    variants={fadeInFromYVariant}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                    className="btn md:text-lg font-normal cursor-default"
                                    key={index}
                                    whileHover={{ scale: 0.9 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Skills;
