// src/components/NavBar.jsx
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {
    const isNavbarOpen = ref(false);
    const activeSection = ref(""); // Track the active section
    const scrollProgress = ref(0); // Track scroll progress (0 to 100%)

    // Scroll spy logic
    const setActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      activeSection.value = currentSection || "about"; // Default to first section if none active
    };

    // Progress bar logic
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      scrollProgress.value = (scrolled / scrollHeight) * 100;
      setActiveSection(); // Update active section on scroll
    };

    onMounted(() => {
      window.addEventListener("scroll", updateScrollProgress);
      setActiveSection(); // Set initial active section
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateScrollProgress);
    });

    const toggleNavbar = () => {
      isNavbarOpen.value = !isNavbarOpen.value;
      const navbar = document.getElementById("example-collapse-navbar");
      if (navbar) {
        navbar.classList.toggle("hidden", !isNavbarOpen.value);
      }
    };

    return { isNavbarOpen, activeSection, scrollProgress, toggleNavbar };
  },
  render() {
    return (
      <nav class="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-lg">
        {/* Progress Bar */}
        <div
          class="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-10"
          style={{
            transform: `scaleX(${this.scrollProgress / 100})`,
            transformOrigin: "left",
          }}
        >
          <div class="h-full bg-blue-900"></div>
        </div>

        <div class="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
          <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a class="font-semibold capitalize text-blue-950" href="#">
              <i class="fa-duotone fa-light fa-layer-group me-2"></i>
              Pim Panharith
            </a>
            <button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => this.toggleNavbar()}
            >
              <i class="text-blue-950 fas fa-bars"></i>
            </button>
          </div>
          <div
            class={[
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none",
              this.isNavbarOpen ? "block" : "hidden",
            ].join(" ")}
            id="example-collapse-navbar"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center space-x-4 py-2 lg:py-0">
              <li class="inline-block">
                <a
                  class={[
                    "text-blue-950 px-3 py-2 lg:py-2 flex items-center capitalize font-semibold",
                  ].join(" ")}
                  href="#about"
                >
                  {this.activeSection === "about" && (
                    <i class="fa-duotone fa-regular fa-user-tie me-2"></i>
                  )}
                  About
                </a>
              </li>
              <li class="inline-block">
                <a
                  class={[
                    "text-blue-950 px-3 py-2 lg:py-2 flex items-center capitalize font-semibold",
                  ].join(" ")}
                  href="#skills"
                >
                  {this.activeSection === "skills" && (
                    <i class="fa-duotone fa-solid fa-code me-2"></i>
                  )}
                  Skills
                </a>
              </li>
              <li class="inline-block">
                <a
                  class={[
                    "text-blue-950 px-3 py-2 lg:py-2 flex items-center capitalize font-semibold",
                  ].join(" ")}
                  href="#projects"
                >
                  {this.activeSection === "projects" && (
                    <i class="fa-duotone fa-solid fa-window me-2"></i>
                  )}
                  Projects
                </a>
              </li>
              <li class="inline-block">
                <a
                  class={[
                    "text-blue-950 px-3 py-2 lg:py-2 flex items-center capitalize font-semibold",
                  ].join(" ")}
                  href="#contact"
                >
                  {this.activeSection === "contact" && (
                    <i class="fa-duotone fa-light fa-id-badge me-2"></i>
                  )}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  },
});
