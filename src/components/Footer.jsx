import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return (
      <footer class="bg-white cus-shadow border-t border-gray-300 py-5">
        <div class="container mx-auto px-4 text-blue-950">
          <div class="flex justify-between">
            <div class="w-50">
              <p>© 2025. Pim Panharith</p>
            </div>
            <p>
              <strong>Under Development</strong>
            </p>
            <div class="flex w-50 gap-3 items-center justify-end">
              <span class="font-medium">Tool:</span>
              <img
                src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuejs/vuejs-original.svg"
                class="w-7 object-contain"
                alt="Vue"
              />
              <img
                src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
                class="w-7 object-contain"
                alt="Tailwind CSS"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  },
});
