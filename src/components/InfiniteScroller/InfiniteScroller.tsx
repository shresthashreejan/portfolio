import { useEffect } from "react";
import "./InfiniteScroller.css";

import skills from "../../data/json/skills.json";

const InfiniteScroller = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll<HTMLElement>(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation(scrollers);
        }
    }, []);

    function addAnimation(scrollers: NodeListOf<HTMLElement>): void {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", "true");

            const scrollerInner =
                scroller.querySelector<HTMLElement>(".scroller-inner");
            if (scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            }
        });
    }

    return (
        <>
            <div
                className="scroller max-w-full py-4"
                data-speed="fast"
                data-direction="left"
            >
                <ul className="scroller-inner flex flex-wrap gap-8 md:gap-12">
                    {skills.map((item, index) => (
                        <li className="text-2xl md:text-4xl" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default InfiniteScroller;
