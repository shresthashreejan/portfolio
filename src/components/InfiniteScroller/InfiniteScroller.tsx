import { useEffect } from "react";
import "./InfiniteScroller.css";

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

    const items = [
        "HTML",
        "CSS",
        "JS",
        "Web Development",
        "3D",
        "TypeScript",
        "React",
        "SvelteKit",
        "Full Stack Development",
    ];

    return (
        <>
            <div
                className="scroller max-w-full py-4"
                data-speed="fast"
                data-direction="left"
            >
                <ul className="scroller-inner flex flex-wrap gap-12">
                    {items.map((item, index) => (
                        <li className="text-4xl" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default InfiniteScroller;
