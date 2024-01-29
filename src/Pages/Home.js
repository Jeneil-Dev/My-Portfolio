import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import About from "../Components/About";

export default function Home() {
    return (
        <div className="container">
            
            <Hero />
            <About />
            <Projects />
            
        </div>
    );
}