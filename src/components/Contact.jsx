// src/components/Contact.jsx
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <section id="contact" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto text-center">
            Reach out via{" "}
            <a
              href="mailto:example@email.com"
              class="text-blue-500 hover:underline"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    );
  },
});
