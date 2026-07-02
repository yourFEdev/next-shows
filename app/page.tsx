import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";


export default function Home() {
    return (
        <>
          <Navbar />
          <Hero/>
          <About/>
          <Projects/>
          <Footer/>
        </>
    );
}