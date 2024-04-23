import { useState } from "react";
import InfiniteScroller from "../components/InfiniteScroller/InfiniteScroller";

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
        <>
            <div className="flex justify-center py-12">
                <InfiniteScroller />
            </div>

            <div className="px-24 flex flex-col h-[50vh] justify-center">
                <h1 className="text-4xl">
                    Do you have any awesome project ideas?
                </h1>
                <h2 className="text-7xl mt-12">Let's talk.</h2>
                <h1
                    className={`text-9xl flex flex-wrap cursor-pointer hover:underline ${
                        emailClicked ? "text-gray-500" : ""
                    }`}
                    onClick={handleEmailClick}
                >
                    <span>shr.</span>
                    <span>shreejan</span>
                    <span>@gmail.</span>
                    <span>com</span>
                </h1>
                <div className="text-4xl mt-12">
                    {emailClicked
                        ? "<Looking forward to talk to you/>"
                        : "<Click email to copy/>"}
                </div>
            </div>
        </>
    );
};

export default Contact;
