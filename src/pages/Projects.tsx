import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import ProjectsData from "../data/json/projects.json";

import { opacityAndYVariant } from "../utils/motionVariants";

const Projects = () => {
    return (
        <>
            <div className="flex justify-center py-12 px-4 md:px-24">
                <h1 className="text-4xl md:text-6xl uppercase header-text">
                    Projects
                </h1>
            </div>

            <div className="flex justify-center px-4 md:px-24">
                <motion.div
                    variants={opacityAndYVariant}
                    initial="initial"
                    whileInView="animate"
                    className="border-t-2 border-opacity-5 h-[65vh] md:h-[80vh] py-4 overflow-y-auto px-2 md:px-0"
                >
                    <div className="flex flex-wrap justify-center gap-12">
                        {ProjectsData.projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                                githubUrl={project.github_url}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Projects;
