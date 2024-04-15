import ThemeController from "./ThemeController";

const Navbar = () => {
    return (
        <>
            <div className="absolute top-2 right-2">
                <ThemeController />
            </div>
        </>
    );
};

export default Navbar;
