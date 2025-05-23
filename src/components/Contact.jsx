// src/components/Contact.jsx
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <section id="contact" class="py-16 pb-20 bg-gray-100">
        <div class="container mx-auto">
          <h1 class="text-2xl font-bold mb-5">
            <i class="fa-regular fa-user me-3"></i>Get in Touch
          </h1>
          <p class="text-gray-600 mb-4">
            I’m currently open to internship or junior web development
            opportunities. <br /> If you have a project, job opportunity, or
            just want to connect, feel free to reach out. I’d love to hear from
            you!
          </p>
          <ul className="grid grid-cols-4 gap-4 items-start">
            <li>
              <a
                href="https://t.me/PanharithPim"
                target="_blank"
                class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
              >
                <i class="fa-brands fa-telegram text-2xl me-2"></i>
                <span className="text-lg font-mediums">085 453 752</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:pimpanharith@gmail.com"
                target="_blank"
                class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
              >
                <i class="fa-brands fa-google text-2xl me-2"></i>
                <span className="text-lg font-medium">
                  pimpanharith@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pimpanharith/"
                target="_blank"
                class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
              >
                <i class="fa-brands fa-linkedin text-2xl me-2"></i>
                <span className="text-lg font-medium">
                  linkedin.com/in/pimpanharith
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GGHosttttt"
                target="_blank"
                class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
              >
                <i class="fa-brands fa-github text-xl me-2"></i>
                <span className="text-lg font-medium">Pim Panharith</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  },
});
