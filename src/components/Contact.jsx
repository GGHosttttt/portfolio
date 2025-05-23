// src/components/Contact.jsx
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <section id="contact" class="py-16 bg-gray-100">
        <div class="container mx-auto">
          <h1 class="text-2xl font-bold mb-8">
            <i class="fa-regular fa-user me-3"></i>Get in Touch
          </h1>
          <div className="flex flex-col gap-4 items-start">
            <a
              href="https://t.me/PanharithPim"
              target="_blank"
              className="text-blue-900"
            >
              <i class="fa-brands fa-telegram text-2xl me-2"></i>
              <span className="text-lg font-medium">085 453 752</span>
            </a>
            <a
              href="mailto:pimpanharith@gmail.com"
              target="_blank"
              className=" text-blue-900"
            >
              <i class="fa-brands fa-google text-2xl me-2"></i>
              <span className="text-lg font-medium">
                pimpanharith@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/pimpanharith/"
              target="_blank"
              className=" text-blue-900"
            >
              <i class="fa-brands fa-linkedin text-2xl me-2"></i>
              <span className="text-lg font-medium">
                linkedin.com/in/pimpanharith/
              </span>
            </a>
            <a
              href="https://github.com/GGHosttttt"
              target="_blank"
              className=" text-blue-900"
            >
              <i class="fa-brands fa-github text-xl me-2"></i>
              <span className="text-lg font-medium">Pim Panharith</span>
            </a>
          </div>
        </div>
      </section>
    );
  },
});
