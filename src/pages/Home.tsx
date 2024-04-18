import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <Hero />
                </section>
                <section className="projects">
                    <Hero />
                </section>
                <section className="resume">
                    <Hero />
                </section>
                <section className="contact">
                    <Hero />
                </section>
            </main>
        </>
    );
};

export default Home;
