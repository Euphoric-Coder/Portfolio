import { useEffect, useState } from "react";
import About from "./About";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return (
      <div
        className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] items-center overflow-hidden justify-center`}
      >
        <Header />
        <About />
        <Projects />
        <Skills />
        {/* <Experience /> */}
        <Education />
        {/* <Contact /> */}
        <Footer />
        <Mail />
        <Social />
      </div>
    );
};
export default HomePage;