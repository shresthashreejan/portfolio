import { useState } from "react";
import { motion } from "framer-motion";
import InfiniteScroller from "../components/InfiniteScroller/InfiniteScroller";
import Footer from "../components/Footer";
import {
    fadeInFromXVariant,
    opacityAndYVariant,
} from "../utils/motionVariants";

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
            <motion.div
                className="py-12"
                variants={opacityAndYVariant}
                initial="initial"
                whileInView="animate"
            >
                <InfiniteScroller />
            </motion.div>

            <div className="flex-1 md:py-12 px-4 md:px-24">
                <ul className="flex flex-col">
                    <motion.li
                        variants={fadeInFromXVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.2"
                        className="text-2xl md:text-4xl"
                    >
                        Do you have any awesome project ideas?
                    </motion.li>
                    <motion.li
                        variants={fadeInFromXVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.4"
                        className="text-4xl md:text-6xl lg:text-7xl mt-8 md:mt-12"
                    >
                        Let's talk.
                    </motion.li>
                    <motion.li
                        variants={fadeInFromXVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.6"
                        className={
                            "text-5xl md:text-7xl mt-4 flex flex-wrap cursor-pointer hover:underline"
                        }
                        onClick={handleEmailClick}
                    >
                        <span>shr.</span>
                        <span>shreejan</span>
                        <span>@gmail.</span>
                        <span>com</span>
                    </motion.li>
                    <motion.li
                        variants={fadeInFromXVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.8"
                        className="text-2xl md:text-4xl mt-8 md:mt-12"
                    >
                        {emailClicked
                            ? "<Looking forward to talk to you/>"
                            : "<Click email to copy/>"}
                    </motion.li>
                </ul>
            </div>
            <div className="px-4 md:px-24">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
