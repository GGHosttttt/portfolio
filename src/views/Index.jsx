import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Skills from "@/components/global/Skills.jsx";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education.jsx";
import Loading from "@/components/global/Loading";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const loading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
        }, 0);
      // }, 2500);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => (
      <main>
        {loading.value ? (
          <Loading />
        ) : (
          <main>
            <section id="about">
              <About />
            </section>
            <section id="about">
            <Expertise />
            </section>
            <section id="education">
              <div className="container mx-auto py-20">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <Experience />
                  <Education />
                </div>
              </div>
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
        )}
      </main>
    );
  },
};
