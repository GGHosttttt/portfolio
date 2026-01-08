import { defineComponent } from "vue";
import { usePortfoliosStore } from "@/store/portfolioStore";
export default defineComponent({
  setup() {
    const skillsStore = usePortfoliosStore();
    return { skills: skillsStore.getSkills };
  },
  render() {
    return (
      <section class="py-7 bg-gray-100">
        <div class="container mx-auto px-4 bg-gray-100 ">
          <h1 class="text-3xl font-bold mb-6 ">
            {/* <i class="fa-duotone fa-solid fa-code me-3"></i> */}
            <i class="fa-regular fa-laptop-code me-3"></i>
            Skills
          </h1>
          <p class=" text-gray-600 mb-8">
            I am well-versed in programming and web development, with experience
            building both user interfaces and server-side systems.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {this.skills.map((skill) => (
              <div class="bg-white card skill-card text-blue-950 p-6 rounded-lg">
                <p className="skill-icon">
                  <i class={skill.icon + " text-4xl mb-4"}></i>
                </p>
                <h3 class="text-xl font-semibold mb-2">{skill.title}</h3>
                <p class="text-gray-600">{skill.description}</p>
              </div>
            ))}

            {/* Extra default card */}
            <div
              class="bg-blue-50 border-2 border-dashed border-blue-300 
              text-blue-800 p-6 rounded-lg flex flex-col items-center justify-center"
            >
              <i class="fa-light fa-plus text-4xl mb-4"></i>
              <h3 class="text-lg font-semibold">More Coming</h3>
              <p class="text-sm text-center mt-2">
                Still building, learning, and expanding my skill set.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
