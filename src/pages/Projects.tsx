import ProjectCard from "../components/ProjectCard";
import ProjectsData from "../data/json/projects.json";

const Projects = () => {
    return (
        <>
            <div className="flex justify-center p-12">
                <h1 className="text-6xl uppercase font-medium">Projects</h1>
            </div>

            <div className="flex justify-center px-12">
                <div className="border-y-2 border-opacity-5 h-[80vh] py-4 overflow-y-auto">
                    <div className="flex flex-wrap justify-center gap-12">
                        {ProjectsData.projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                                githubUrl={project.github_url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
