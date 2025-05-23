import About from "@/components/About.jsx";
import Projects from "@//components/Projects.jsx";
import Contact from "@//components/Contact.jsx";
import Skills from "@//components/global/Skills.jsx";
import Education from "@//components/Education.jsx";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => (
      <main>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
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
      </main>
    );
  },
};
