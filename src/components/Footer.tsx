const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bottom-0 py-4 border-t-2">
            <div className="flex justify-between">
                <a href="https://github.com/shresthashreejan" target="_blank">
                    Shreejan Shrestha.
                </a>
                <p>{currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;
