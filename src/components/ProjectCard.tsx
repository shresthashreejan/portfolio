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
    return (
        <>
            <div className="card w-1/4 border-2 border-opacity-5">
                <div className="card-body">
                    <div className="card-title flex justify-between">
                        <h2>{title}</h2>
                        <div className="btn-group flex gap-2">
                            {url && (
                                <a href={url} target="_blank">
                                    <motion.button
                                        className="tooltip"
                                        data-tip="Learn More"
                                    >
                                        <BsArrowUpRightSquare size={28} />
                                    </motion.button>
                                </a>
                            )}

                            <a href={githubUrl} target="_blank">
                                <motion.button
                                    className="tooltip"
                                    data-tip="Github Repo"
                                >
                                    <BsGithub size={28} />
                                </motion.button>
                            </a>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
