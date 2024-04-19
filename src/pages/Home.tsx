import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <main className="snap-mandatory snap-y h-screen overflow-y-scroll">
                <section id="hero" className="snap-start min-h-screen">
                    <Hero />
                </section>
                <section id="projects" className="snap-start min-h-screen">
                    <Projects />
                </section>
                <section id="resume" className="snap-start min-h-screen">
                    <Resume />
                </section>
                <section id="contact" className="snap-start min-h-screen">
                    <Contact />
                </section>
            </main>
        </>
    );
};

export default Home;
