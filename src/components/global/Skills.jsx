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
            I'm well verse in Program and Web-Development fields, develop both
            user interface and server-side
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {this.skills.map((skill) => (
              <div class="bg-white card skill-card text-blue-950 p-6 rounded-lg ">
                <p className="skill-icon">
                  <i class={skill.icon + " text-4xl mb-4"}></i>
                </p>
                <h3 class="text-xl font-semibold  mb-2">{skill.title}</h3>
                <p class="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
