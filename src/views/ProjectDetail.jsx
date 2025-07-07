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
    // Reactively get project based on projectId
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
          // }, 0);
        }, 2500);
      } else {
        error.value = "Project not found";
        loading.value = false;
        route.push("/");
      }
    });

    // Clean up the interval when the component is unmounted
    onUnmounted(() => {
      stopAutoSlide();
      //   projectData.value = null;
      //   project.value = null;
    });

    // Carousel navigation methods
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

    // Auto-play control methods
    const startAutoSlide = () => {
      if (!autoSlideInterval && !isPaused.value) {
        autoSlideInterval = setInterval(() => {
          nextImage();
        }, 4000); // Slide every 5 seconds
      }
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    };

    // Pause auto-play on user interaction
    const pauseAutoSlide = () => {
      isPaused.value = true;
      stopAutoSlide();
    };

    // Resume auto-play after user interaction
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
      <div class=" bg-gray-100 pb-5">
        {this.loading && <Loading />}
        <div class="container cus-shadow mx-auto py-5 pb-10">
          {project && (
            <div class="bg-white rounded-lg cus-shadow p-6 pb-10">
              <div className="mb-5">
                <a
                  role="button"
                  className="text-blue-950 font-medium cursor-pointer"
                  onClick={handleBack}
                >
                  <span>
                    <i class="fa-solid fa-turn-down-left"></i> Back
                  </span>
                </a>
              </div>
              <div className="mb-5 px-5 py-3 rounded m-5 bg-gray-100">
                {project.images?.length > 0 ? (
                  <div
                    class="relative mb-4"
                    onMouseenter={pauseAutoSlide}
                    onMouseleave={resumeAutoSlide}
                  >
                    {/* Image Display */}
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} image ${currentImageIndex + 1}`}
                      class="w-full h-[500px] object-contain rounded-t-lg"
                    />

                    {project.images.length > 1 && (
                      <div>
                        <button
                          onClick={() => {
                            prevImage();
                            pauseAutoSlide();
                            setTimeout(resumeAutoSlide, 3000); // Resume after 3 seconds
                          }}
                          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none"
                        >
                          <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button
                          onClick={() => {
                            nextImage();
                            pauseAutoSlide();
                            setTimeout(resumeAutoSlide, 3000); // Resume after 3 seconds
                          }}
                          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none"
                        >
                          <i class="fa-regular fa-angle-right"></i>
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
                              setTimeout(resumeAutoSlide, 3000); // Resume after 3 seconds
                            }}
                            class={`w-3 h-3 rounded-full ${
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
                  <p class="text-gray-600 mb-4">No images available.</p>
                )}
              </div>
              <div className="grid grid-cols-12 gap-10 px-10 mx-5 border-gray-300 border-s border-e">
                <div className="grid col-span-8">
                  <div className="border-gray-300 border-b mb-5 pb-3 ">
                    <h2 class="text-3xl text-blue-950 font-semibold mb-2 lang-khmer ">
                      {project.title}
                    </h2>
                    <p class="mb-2 uppercase font-bold text-gray-500 tracking-wider">
                      {project.category}
                    </p>
                  </div>
                  <p class="text-gray-700 mb-4">
                    {project.description || "No description available."}
                  </p>
                  {project.features?.length > 0 && (
                    <div class="mb-4">
                      <h3 class="font-semibold mb-2">Features</h3>
                      <ul class="list-none">
                        {project.features.map((feature, index) => (
                          <li key={index}>
                            <i class="fa-regular fa-check me-3 font-semibold text-blue-800"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="grid col-span-4 border-gray-300 border-s ps-5">
                  {project.tools?.length > 0 && (
                    <div className="">
                      <h3 class="font-semibold mb-2">Technologies</h3>
                      <ul class="list-disc pl-5 mb-10">
                        {project.tools.map((tool, index) => (
                          <li key={index} className="list-none mb-3">
                            <div className="flex gap-4">
                              <img
                                src={tool.icon}
                                alt="tool-image"
                                className="w-6 object-contain"
                              />
                              <span>
                                {tool.name}: {tool.technology}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <h3 class="font-semibold mb-2">Other Resource</h3>
                        <a
                          href={project.yt_url}
                          target="_blank"
                          className="hover:text-red-950"
                        >
                          <i class="fa-brands fa-youtube me-3 text-red-700"></i>
                          <span>Available on Youtube</span>
                        </a>
                        <br />
                        {project.demo && (
                          <a href={project.website_url} target="_blank">
                            <span>
                              <i className="fa-solid fa-computer-mouse me-4 text-blue-800"></i>
                              Live Demo
                            </span>
                          </a>
                        )}
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
