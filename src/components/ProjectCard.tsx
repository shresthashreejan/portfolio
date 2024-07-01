import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    url,
    githubUrl,
}) => {
    const redirectUrl = url ? url : githubUrl;
    return (
        <>
            <motion.a
                href={redirectUrl}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="card w-full lg:w-3/4 xl:w-1/4 border-2 border-opacity-5 cursor-pointer"
            >
                <div className="card-body">
                    <div className="card-title flex justify-between">
                        <h2>{title}</h2>
                        <div className="btn-group flex gap-2">
                            {url && (
                                <a href={url} target="_blank">
                                    <button
                                        className="tooltip"
                                        data-tip="Learn More"
                                    >
                                        <BsArrowUpRightSquare size={28} />
                                    </button>
                                </a>
                            )}

                            <a href={githubUrl} target="_blank">
                                <button
                                    className="tooltip"
                                    data-tip="Github Repository"
                                >
                                    <BsGithub size={28} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </motion.a>
        </>
    );
};

export default ProjectCard;
