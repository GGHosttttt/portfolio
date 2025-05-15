import { defineComponent } from "vue";
import { usePortfoliosStore } from "@/store/portfolio";
export default defineComponent({
  setup() {
    const skillsStore = usePortfoliosStore();
    return { skills: skillsStore.getSkills };
  },
  render() {
    return (
      <section class="py-7 bg-gray-100">
        <div class="container py-8 bg-white mb-8"></div>
        <div class="container mx-auto px-4 bg-gray-100 ">
          <h2 class="text-3xl font-bold mb-6">
            <i class="fa-duotone fa-solid fa-code me-3"></i>
            Skills
          </h2>
          <p class=" text-gray-600 mb-8">
            Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
            vehicula enim, non aliquam risus.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            {this.skills.map((skill) => (
              <div class="bg-white p-6 rounded-lg ">
                <i class={skill.icon + " text-4xl text-gray-500 mb-4"}></i>
                <h3 class="text-xl font-semibold text-blue-950 mb-2">
                  {skill.title}
                </h3>
                <p class="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
