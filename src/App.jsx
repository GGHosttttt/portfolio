// src/App.jsx
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/global/Skills.jsx";

export default defineComponent({
  render() {
    return (
      <div>
        <NavBar />
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    );
  },
});
