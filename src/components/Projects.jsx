// src/components/Projects.jsx
import { defineComponent, computed } from "vue";
import { usePortfoliosStore } from "@/store/portfolio";

export default defineComponent({
  setup() {
    const projectsStore = usePortfoliosStore();
    const projects = computed(() => projectsStore.getProjects);
    const categories = computed(() => projectsStore.getCategories);
    const setCategory = (category) => {
      projectsStore.setCategory(category);
    };
    const selectedCategory = computed(() => projectsStore.selectedCategory); // Add this to access selectedCategory reactively

    return { projects, categories, setCategory, selectedCategory };
  },
  render() {
    return (
      <section class="py-10 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-left mb-4">Portfolio</h2>
          <p class="text-left text-gray-600 mb-8">
            Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
            vehicula enim, non aliquam risus.
          </p>
          <div class="flex flex-wrap gap-2 mb-8">
            {this.categories.map((category) => (
              <button
                class={[
                  "px-4 py-2 text-sm font-semibold uppercase rounded",
                  this.selectedCategory === category
                    ? "bg-blueGray-800 text-white"
                    : "bg-white text-blueGray-700 hover:bg-blueGray-200",
                ].join(" ")}
                onClick={() => this.setCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {this.projects.map((project) => (
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
