import { useState } from "react";
import InfiniteScroller from "../components/InfiniteScroller/InfiniteScroller";
import Footer from "../components/Footer";

const Contact = () => {
    const [emailClicked, setEmailClicked] = useState(false);

    const handleEmailClick = () => {
        const email = "shr.shreejan@gmail.com";

        navigator.clipboard
            .writeText(email)
            .then(() => {
                setEmailClicked(true);
            })
            .catch((error) => {
                console.error("Error copying to clipboard: ", error);
            });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="py-12">
                <InfiniteScroller />
            </div>

            <div className="flex-1 md:py-12 px-4 md:px-24">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl">
                        Do you have any awesome project ideas?
                    </h1>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl mt-8 md:mt-12">
                        Let's talk.
                    </h2>
                    <h1
                        className={
                            "text-5xl md:text-7xl mt-4 flex flex-wrap cursor-pointer hover:underline"
                        }
                        onClick={handleEmailClick}
                    >
                        <span>shr.</span>
                        <span>shreejan</span>
                        <span>@gmail.</span>
                        <span>com</span>
                    </h1>
                    <div className="text-2xl md:text-4xl mt-8 md:mt-12">
                        {emailClicked
                            ? "<Looking forward to talk to you/>"
                            : "<Click email to copy/>"}
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-24">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
