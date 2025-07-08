import { defineComponent, computed } from "vue";
import { usePortfoliosStore } from "@/store/portfolioStore";
import Btn from "./global/Btn";
import router from "..";
export default defineComponent({
  setup() {
    const projectsStore = usePortfoliosStore();
    const projects = computed(() => projectsStore.getProjects);
    const categories = computed(() => projectsStore.getCategories);
    const setCategory = (category) => {
      projectsStore.setCategory(category);
    };
    const selectedCategory = computed(() => projectsStore.selectedCategory);
    const goToDetail = (project) => {
      router.push({
        name: "ProjectDetail",
        params: { id: String(project.id) }, // 🔥 convert to string
      });
    };
    return { projects, categories, setCategory, selectedCategory, goToDetail };
  },
  render() {
    return (
      <section class="py-10 bg-gray-100">
        <div class="container mx-auto px-4">
          <h1 class="text-2xl font-bold text-left mb-4">
            <i class="fa-regular fa-layer-group me-3"></i>
            Portfolio
          </h1>
          <p class="text-left text-gray-600 mb-8"></p>
          {/* <div class="flex flex-wrap gap-2 mb-8">
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
          </div> */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {this.projects.map((project) => (
              <div class="bg-white card card-project rounded-lg shadow-md overflow-hidden">
                <div className="card-body">
                  <div className="overflow-hidden">
                    <img
                      src={project?.images?.[0]}
                      alt={project.title}
                      class="w-full h-60 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-[20px] font-semibold lang-khmer text-blue-950">
                      {project.title}
                    </h2>
                    <small className="uppercase font-bold text-gray-500 tracking-wider">
                      {project.category}
                    </small>
                    <p className="limit-line-3 mb-3 mt-2">
                      {project.description}
                    </p>
                    <div className=" flex justify-end">
                      <Btn
                        class="primary-btn-outline padding-[0px]"
                        text="Detail"
                        onClick={() => this.goToDetail(project)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
});
