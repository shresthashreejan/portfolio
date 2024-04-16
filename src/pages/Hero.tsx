import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="flex flex-col">
                        <h1 className="text-9xl uppercase">
                            Shreejan Shrestha
                        </h1>

                        <div className="btn-container flex justify-center p-4 gap-4">
                            <button
                                className="tooltip tooltip-bottom"
                                data-tip="LinkedIn"
                            >
                                <BsLinkedin size={30} />
                            </button>
                            <button
                                className="tooltip tooltip-bottom"
                                data-tip="Github"
                            >
                                <BsGithub size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
