import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScroller from "../components/InfiniteScroller/InfiniteScroller";
import Footer from "../components/Footer";
import {
    fadeInFromYSlowVariant,
    opacityAndYVariant,
    fadeInFadeOutVariant,
} from "../utils/motionVariants";

const Contact = () => {
    const afterClickText = "Looking forward to talk to you.";
    const beforeClickText = "Click email to copy.";

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
                viewport={{ once: true }}
            >
                <InfiniteScroller />
            </motion.div>

            <div className="flex-1 md:py-12 px-4 md:px-24">
                <ul className="flex flex-col">
                    <motion.li
                        variants={fadeInFromYSlowVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.2"
                        className="text-2xl md:text-4xl"
                    >
                        Have any awesome project ideas?
                    </motion.li>
                    <motion.li
                        variants={fadeInFromYSlowVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.4"
                        className="text-4xl md:text-5xl lg:text-6xl font-medium mt-8 md:mt-12"
                    >
                        Let's talk.
                    </motion.li>
                    <motion.li
                        variants={fadeInFromYSlowVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.6"
                        className={
                            "text-5xl md:text-7xl mt-4 flex flex-wrap cursor-pointer hover:underline"
                        }
                        onClick={handleEmailClick}
                    >
                        <span className="font-medium">shr.</span>
                        <span className="font-medium">shreejan</span>
                        <span className="font-medium">@gmail.</span>
                        <span className="font-medium">com</span>
                    </motion.li>
                    <motion.div
                        variants={fadeInFromYSlowVariant}
                        initial="initial"
                        whileInView="animate"
                        custom="0.8"
                    >
                        <AnimatePresence>
                            {emailClicked ? (
                                <motion.li
                                    key="after-click"
                                    variants={fadeInFadeOutVariant}
                                    initial="initial"
                                    exit="exit"
                                    whileInView="animate"
                                    className="text-2xl md:text-4xl mt-8 md:mt-12"
                                >
                                    <span>{afterClickText}</span>
                                </motion.li>
                            ) : (
                                <motion.li
                                    key="before-click"
                                    variants={fadeInFadeOutVariant}
                                    initial="initial"
                                    exit="exit"
                                    whileInView="animate"
                                    className="text-2xl md:text-4xl mt-8 md:mt-12"
                                >
                                    <span>{beforeClickText}</span>
                                </motion.li>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </ul>
            </div>
            <motion.div
                variants={fadeInFromYSlowVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom="1"
                className="px-4 md:px-24"
            >
                <Footer />
            </motion.div>
        </div>
    );
};

export default Contact;
