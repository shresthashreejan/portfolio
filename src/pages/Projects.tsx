import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <>
            <div className="flex justify-center p-16">
                <h1 className="text-6xl uppercase font-medium">Projects</h1>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex justify-center gap-12">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="flex justify-center gap-12">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </>
    );
};

export default Projects;
