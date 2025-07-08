// src/components/NavBar.jsx
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const isNavbarOpen = ref(false);
    const activeSection = ref(""); // Track the active section
    const scrollProgress = ref(0); // Track scroll progress (0 to 100%)
    const route = useRoute();
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
      activeSection.value = currentSection; // Default to first section if none active
    };

    // Progress bar logic
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;

      // Prevent division by zero or negative scrollable height
      if (scrollHeight <= 0) {
        scrollProgress.value = 0; // Set progress to 0 if there's no scrollable content
      } else {
        scrollProgress.value = (scrolled / scrollHeight) * 100;
      }

      setActiveSection(); // Update active section on scroll
    };
    const iconForSection = (section) => {
      switch (section) {
        case "about":
          return "fa-user-tie";
        case "education":
          return "fa-diploma";
        case "skills":
          return "fa-code";
        case "projects":
          return "fa-window";
        case "contact":
          return "fa-id-badge";
        default:
          return "";
      }
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

    // return { isNavbarOpen, activeSection, scrollProgress, toggleNavbar };
    return () => (
      <nav class="top-0 sticky z-50 w-full bg-white shadow-lg overflow-hidden">
        {/* Progress Bar */}
        <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-200 z-10">
          <div
            class="h-full bg-blue-900"
            style={{
              transform: `scaleX(${scrollProgress.value / 100})`,
              transformOrigin: "left",
              transition: "transform 0.2s ease",
            }}
          ></div>
        </div>

        <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo + Toggle */}
          <div class="flex items-center justify-between w-full lg:w-auto">
            <RouterLink
              to="/"
              class="font-semibold capitalize text-blue-950 text-lg"
            >
              <i class="fa-duotone fa-layer-group me-2"></i> Pim Panharith
            </RouterLink>
            <button
              class="lg:hidden text-blue-950 text-xl"
              type="button"
              onClick={toggleNavbar}
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          {/* Desktop Links */}
          {!route.path.includes("/projects/") && (
            <div class={["hidden lg:flex flex-grow items-center justify-end"]}>
              <ul class="flex flex-row list-none space-x-4 items-center">
                {["about", "education", "skills", "projects", "contact"].map(
                  (section) => (
                    <li class="inline-block" key={section}>
                      <a
                        className={`text-blue-950 px-3 py-2 flex items-center capitalize font-semibold ${
                          activeSection.value === section ? "text-blue-700" : ""
                        }`}
                        href={`#${section}`}
                      >
                        {activeSection.value === section && (
                          <i
                            class={`fa-duotone ${iconForSection(section)} me-2`}
                          ></i>
                        )}
                        {section}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Sidebar Drawer */}
        {!route.path.includes("/projects/") && (
          <div>
            {/* Overlay */}
            <div
              class={[
                "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
                isNavbarOpen.value
                  ? "opacity-100 visible"
                  : "opacity-0 invisible",
              ]}
              onClick={toggleNavbar}
            ></div>

            {/* Sidebar */}
            <aside
              class={[
                "fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300",
                isNavbarOpen.value ? "translate-x-0" : "-translate-x-full",
              ]}
            >
              <div class="flex justify-between items-center px-4 py-3 border-b">
                <span class="text-lg font-semibold text-blue-950">Menu</span>
                <button
                  class="text-xl text-blue-950"
                  onClick={toggleNavbar}
                  aria-label="Close sidebar"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <ul class="flex flex-col list-none px-4 pt-4 space-y-2">
                {["about", "education", "skills", "projects", "contact"].map(
                  (section) => (
                    <li key={section}>
                      <a
                        class={`block text-blue-950 px-3 py-2 rounded capitalize font-semibold ${
                          activeSection.value === section ? "text-blue-700" : ""
                        }`}
                        href={`#${section}`}
                        onClick={toggleNavbar}
                      >
                        {activeSection.value === section && (
                          <i
                            class={`fa-duotone ${iconForSection(section)} me-2`}
                          ></i>
                        )}
                        {section}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </aside>
          </div>
        )}
      </nav>
    );
  },
});
