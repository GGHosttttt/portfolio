import { defineComponent, ref } from "vue";
import Btn from "./global/Btn";

export default defineComponent({
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const status = ref(""); // notification text
    const showNotify = ref(false); // show/hide
    const loading = ref(false);

    const sendMessage = async () => {
      loading.value = true;
      if (!name.value || !email.value || !message.value) {
        status.value = "Please fill in all fields.";
        showNotify.value = true;
        return;
      }

      try {
        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
        const text = `New message from portfolio:\nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`;

        await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            text
          )}`
        );

        status.value = "Message sent successfully!";
        showNotify.value = true;

        // Clear form
        name.value = "";
        email.value = "";
        message.value = "";

        // Auto-hide after 3 seconds
        setTimeout(() => (showNotify.value = false), 3000);
      } catch (err) {
        console.error(err);
        status.value = "Failed to send message. Try again later.";
        showNotify.value = true;
      } finally {
        loading.value = false;
      }
    };

    return { name, email, message, status, showNotify, sendMessage };
  },

  render() {
    return (
      <section id="contact" class="py-16 bg-gray-50 relative">
        <div class="shape-line shape-line-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            opacity="1"
            width="800"
            height="800"
          >
            <g stroke-width="3.25" stroke="#1c398eff" fill="none">
              <line
                x1="266.6666666666667"
                y1="0"
                x2="0"
                y2="266.6666666666667"
              ></line>
              <line
                x1="533.3333333333334"
                y1="0"
                x2="266.6666666666667"
                y2="266.6666666666667"
              ></line>
              <line
                x1="800"
                y1="0"
                x2="533.3333333333334"
                y2="266.6666666666667"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="0"
                x2="800"
                y2="266.6666666666667"
              ></line>
              <line
                x1="266.6666666666667"
                y1="266.6666666666667"
                x2="0"
                y2="533.3333333333334"
              ></line>
              <line
                x1="533.3333333333334"
                y1="266.6666666666667"
                x2="266.6666666666667"
                y2="533.3333333333334"
              ></line>
              <line
                x1="800"
                y1="266.6666666666667"
                x2="533.3333333333334"
                y2="533.3333333333334"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="266.6666666666667"
                x2="800"
                y2="533.3333333333334"
              ></line>
              <line
                x1="266.6666666666667"
                y1="533.3333333333334"
                x2="0"
                y2="800"
              ></line>
              <line
                x1="533.3333333333334"
                y1="533.3333333333334"
                x2="266.6666666666667"
                y2="800"
              ></line>
              <line
                x1="800"
                y1="533.3333333333334"
                x2="533.3333333333334"
                y2="800"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="533.3333333333334"
                x2="800"
                y2="800"
              ></line>
              <line
                x1="266.6666666666667"
                y1="800"
                x2="0"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="533.3333333333334"
                y1="800"
                x2="266.6666666666667"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="800"
                y1="800"
                x2="533.3333333333334"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="800"
                x2="800"
                y2="1066.6666666666667"
              ></line>
            </g>
          </svg>
        </div>
        <div class="shape-line shape-line-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            opacity="1"
            width="800"
            height="800"
          >
            <g stroke-width="3.25" stroke="grey" fill="none">
              <line
                x1="266.6666666666667"
                y1="0"
                x2="0"
                y2="266.6666666666667"
              ></line>
              <line
                x1="533.3333333333334"
                y1="0"
                x2="266.6666666666667"
                y2="266.6666666666667"
              ></line>
              <line
                x1="800"
                y1="0"
                x2="533.3333333333334"
                y2="266.6666666666667"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="0"
                x2="800"
                y2="266.6666666666667"
              ></line>
              <line
                x1="266.6666666666667"
                y1="266.6666666666667"
                x2="0"
                y2="533.3333333333334"
              ></line>
              <line
                x1="533.3333333333334"
                y1="266.6666666666667"
                x2="266.6666666666667"
                y2="533.3333333333334"
              ></line>
              <line
                x1="800"
                y1="266.6666666666667"
                x2="533.3333333333334"
                y2="533.3333333333334"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="266.6666666666667"
                x2="800"
                y2="533.3333333333334"
              ></line>
              <line
                x1="266.6666666666667"
                y1="533.3333333333334"
                x2="0"
                y2="800"
              ></line>
              <line
                x1="533.3333333333334"
                y1="533.3333333333334"
                x2="266.6666666666667"
                y2="800"
              ></line>
              <line
                x1="800"
                y1="533.3333333333334"
                x2="533.3333333333334"
                y2="800"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="533.3333333333334"
                x2="800"
                y2="800"
              ></line>
              <line
                x1="266.6666666666667"
                y1="800"
                x2="0"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="533.3333333333334"
                y1="800"
                x2="266.6666666666667"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="800"
                y1="800"
                x2="533.3333333333334"
                y2="1066.6666666666667"
              ></line>
              <line
                x1="1066.6666666666667"
                y1="800"
                x2="800"
                y2="1066.6666666666667"
              ></line>
            </g>
          </svg>
        </div>
        <div class="container grid grid-cols-1 lg:grid-cols-2  mx-auto px-4 gap-10">
          <div>
            <h1 class="text-2xl font-bold text-left mb-4">
              <i class="fa-regular fa-user "></i> Get in Touch
            </h1>

            <p class="text-gray-600 mb-10">
              I’m currently open to internship or junior web development
              opportunities. Send a message via the form below or reach out
              through my social links.
            </p>

            {/* Social Links */}
            <ul class="grid grid-cols-1">
              <li>
                <a
                  href="https://t.me/PanharithPim"
                  target="_blank"
                  class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
                >
                  <i class="fa-brands fa-telegram text-2xl me-2"></i>
                  <span class="text-lg font-mediums">085 453 752</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pimpanharith@gmail.com"
                  target="_blank"
                  class="text-blue-900 hover:text-blue-700 flex items-center transition-colors duration-150 contact-link"
                >
                  <i class="fa-brands fa-google text-2xl me-2"></i>
                  <span class="text-lg font-medium">
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
                  <span class="text-lg font-medium">
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
                  <span class="text-lg font-medium">Pim Panharith</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <form
            class="bg-white p-6 rounded-xl shadow-md relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              this.sendMessage();
            }}
          >
            <h2 class="mb-4 text-gray-700 font-semibold text-md">
              Feel free to contact me using the form below for opportunities,
              questions, or collaborations.{" "}
              <span class="text-blue-900">
                I’ll get back to you as soon as possible
              </span>
            </h2>
            <div class="relative mb-6">
              <input
                type="text"
                id="name"
                placeholder=" "
                v-model={this.name}
                required
                class="peer h-10 w-full rounded-lg border-2 border-gray-200/90 px-4 bg-white 
             focus:border-blue-900 focus:outline-none transition-colors duration-200"
              />
              <label
                for="name"
                class={`absolute left-4 px-2 bg-white pointer-events-none transition-all duration-200
    ${
      this.name
        ? "top-0 -translate-y-1/2 text-xs text-blue-900"
        : "top-1/2 -translate-y-1/2 text-base text-gray-600"
    }
    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-blue-900`}
              >
                Name
              </label>
            </div>

            <div class="relative mb-6">
              <input
                type="email"
                id="email"
                placeholder=" "
                v-model={this.email}
                required
                class="peer h-10 w-full rounded-lg border-2 border-gray-200/90 px-4 bg-white 
             focus:border-blue-900 focus:outline-none transition-colors duration-200"
              />
              <label
                for="name"
                class={`absolute left-4 px-2 bg-white pointer-events-none transition-all duration-200
    ${
      this.email
        ? "top-0 -translate-y-1/2 text-xs text-blue-900"
        : "top-1/2 -translate-y-1/2 text-base text-gray-600"
    }
    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-blue-900`}
              >
                Email
              </label>
            </div>

            <div class="relative mb-6">
              <textarea
                id="message"
                placeholder=" "
                v-model={this.message}
                rows="5"
                required
                class="peer h-40 w-full resize-none rounded-lg border-2 border-gray-200/90 px-4 pt-5 pb-4 bg-white 
             focus:border-blue-900 focus:outline-none transition-colors duration-200"
              ></textarea>
              <label
                for="message"
                class={`absolute left-4 px-2 bg-white pointer-events-none transition-all duration-200
    ${
      this.message
        ? "top-0 -translate-y-1/2 text-xs text-blue-900"
        : "top-5 text-base text-gray-600"
    }
    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-blue-900`}
              >
                Your Message
              </label>
            </div>
            <div class="flex justify-end">
              <Btn
                text="Message"
                loading={this.loading}
                // onClick={this.sendMessage}
              />
            </div>
          </form>
        </div>

        {/* Notification Toast */}
        {this.showNotify && (
          <div class="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded shadow-lg animate-slide-in">
            {this.status}
          </div>
        )}
      </section>
    );
  },
});
