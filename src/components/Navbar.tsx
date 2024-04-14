import ThemeController from "./ThemeController";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="navbar w-full md:w-1/2 shadow-lg md:rounded-full">
                    <div className="flex-1">
                        <a className="text-2xl p-4 cursor-pointer">SHREEJAN.</a>
                    </div>
                    <div>
                        <ul className="flex items-center gap-2">
                            <li>
                                <a className="btn btn-ghost">Link</a>
                            </li>
                            <li>
                                <a className="btn btn-ghost">Link</a>
                            </li>
                            <li>
                                <ThemeController />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
