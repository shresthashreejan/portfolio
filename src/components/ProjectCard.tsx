const ProjectCard = () => {
    return (
        <>
            <div className="card w-1/4 border-2 border-opacity-5
            ">
                <div className="card-body">
                    <h2 className="card-title hover:underline">
                        <a href="https://marketplace.visualstudio.com/items?itemName=shreejan.sfhelper">
                            SF Helper
                        </a>
                    </h2>
                    <p>
                        SF Helper is a Visual Studio Code extension designed to
                        streamline Salesforce development by providing quick
                        access to common operations such as deploying,
                        retrieving, running tests, executing anonymous code and
                        managing debug logs.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
