// Vue Component
import { usePortfoliosStore } from "@/store/portfolioStore";
import Loading from "@/components/global/Loading";
import { onMounted, computed, ref, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import router from "..";
export default {
  setup() {
    const portfolioStore = usePortfoliosStore();
    const route = useRoute();
    const projectId = computed(() => Number(route.params.id));
    const project = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const currentImageIndex = ref(0);
    let autoSlideInterval = null;
    const isPaused = ref(false);
    const projectData = computed(() => {
      return portfolioStore.getProjectById(projectId.value);
    });

    onMounted(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (projectData.value) {
        setTimeout(() => {
          project.value = projectData.value;
          startAutoSlide();
          loading.value = false;
          }, 2500);
        // }, 0);
      } else {
        error.value = "Project not found";
        loading.value = false;
        route.push("/");
      }
    });

    onUnmounted(() => {
      stopAutoSlide();
    });

    const nextImage = () => {
      if (project.value && project.value.images) {
        currentImageIndex.value =
          (currentImageIndex.value + 1) % project.value.images.length;
      }
    };

    const prevImage = () => {
      if (project.value && project.value.images) {
        currentImageIndex.value =
          (currentImageIndex.value - 1 + project.value.images.length) %
          project.value.images.length;
      }
    };

    const goToImage = (index) => {
      currentImageIndex.value = index;
    };

    const startAutoSlide = () => {
      if (!autoSlideInterval && !isPaused.value) {
        autoSlideInterval = setInterval(() => {
          nextImage();
        }, 4000);
      }
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    const pauseAutoSlide = () => {
      isPaused.value = true;
      stopAutoSlide();
    };

    const resumeAutoSlide = () => {
      isPaused.value = false;
      startAutoSlide();
    };

    const handleBack = () => {
      router.push("/");
    };

    return {
      project,
      loading,
      currentImageIndex,
      nextImage,
      prevImage,
      goToImage,
      pauseAutoSlide,
      resumeAutoSlide,
      handleBack,
    };
  },
  render() {
    const {
      project,
      loading,
      currentImageIndex,
      nextImage,
      prevImage,
      goToImage,
      pauseAutoSlide,
      resumeAutoSlide,
      handleBack,
    } = this;
    return (
      <div class="bg-gray-100 py-4 sm:py-6">
        {loading && <Loading />}
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {project && (
            <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div class="mb-4 sm:mb-6">
                <a
                  role="button"
                  class="text-blue-950 font-medium cursor-pointer hover:underline"
                  onClick={handleBack}
                >
                  <span>
                    <i class="fa-solid fa-turn-down-left mr-2"></i> Back
                  </span>
                </a>
              </div>
              <div class="mb-4 sm:mb-6 p-4 sm:p-6 rounded-lg bg-gray-100">
                {project.images?.length > 0 ? (
                  <div
                    class="relative"
                    onMouseenter={pauseAutoSlide}
                    onMouseleave={resumeAutoSlide}
                  >
                    {/* Image Display */}
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} image ${currentImageIndex + 1}`}
                      class="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain rounded-t-lg"
                    />

                    {project.images.length > 1 && (
                      <div>
                        <button
                          onClick={() => {
                            prevImage();
                            pauseAutoSlide();
                            setTimeout(resumeAutoSlide, 3000);
                          }}
                          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-200 focus:outline-none"
                        >
                          <i class="fa-solid fa-angle-left text-lg sm:text-xl"></i>
                        </button>
                        <button
                          onClick={() => {
                            nextImage();
                            pauseAutoSlide();
                            setTimeout(resumeAutoSlide, 3000);
                          }}
                          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-200 focus:outline-none"
                        >
                          <i class="fa-solid fa-angle-right text-lg sm:text-xl"></i>
                        </button>
                      </div>
                    )}

                    {/* Dots Navigation */}
                    {project.images.length > 1 && (
                      <div class="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              goToImage(index);
                              pauseAutoSlide();
                              setTimeout(resumeAutoSlide, 3000);
                            }}
                            class={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                              currentImageIndex === index
                                ? "bg-gray-800"
                                : "bg-gray-400"
                            } hover:bg-gray-600 focus:outline-none`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p class="text-gray-600 text-center">No images available.</p>
                )}
              </div>
              <div class="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-6 border-l border-r border-gray-300">
                <div class="md:col-span-8">
                  <div class="border-b border-gray-300 mb-4 sm:mb-6 pb-3">
                    <h2 class="text-xl sm:text-2xl md:text-3xl text-blue-950 font-semibold lang-khmer">
                      {project.title}
                    </h2>
                    <p class="mt-2 uppercase font-bold text-gray-500 tracking-wider text-sm sm:text-base">
                      {project.category}
                    </p>
                  </div>
                  <p class="text-gray-700 mb-4 text-sm sm:text-base">
                    {project.description || "No description available."}
                  </p>
                  {project.features?.length > 0 && (
                    <div class="mb-4">
                      <h3 class="font-semibold text-base sm:text-lg mb-2">
                        Features
                      </h3>
                      <ul class="list-none space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} class="flex items-center">
                            <i class="fa-regular fa-check mr-3 text-blue-800 text-sm sm:text-base"></i>
                            <span class="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div class="md:col-span-4 border-l border-gray-300 pl-5 md:pl-4 mt-6 md:mt-0">
                  {project.tools?.length > 0 && (
                    <div>
                      <h3 class="font-semibold text-base sm:text-lg mb-2">
                        Technologies
                      </h3>
                      <ul class="list-none space-y-3 mb-6 sm:mb-8">
                        {project.tools.map((tool, index) => (
                          <li key={index} class="flex items-center gap-3">
                            <img
                              src={tool.icon}
                              alt={`${tool.name} icon`}
                              class="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                            />
                            <span class="text-sm sm:text-base">
                              {tool.name}: {tool.technology}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <h3 class="font-semibold text-base sm:text-lg mb-2">
                          Other Resources
                        </h3>
                        <div class="space-y-2">
                          <a
                            href={project.yt_url}
                            target="_blank"
                            class="flex items-center hover:text-red-950 text-sm sm:text-base"
                          >
                            <i class="fa-brands fa-youtube mr-2 text-red-700"></i>
                            <span>Available on YouTube</span>
                          </a>
                          {project.demo && (
                            <a
                              href={project.website_url}
                              target="_blank"
                              class="flex items-center hover:text-blue-950 text-sm sm:text-base"
                            >
                              <i class="fa-solid fa-computer-mouse mr-3 text-blue-800"></i>
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
};
