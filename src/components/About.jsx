// src/components/About.jsx
import { defineComponent } from "vue";
import { ref } from "vue";
import profileImage from "../assets/images/panharith.png"; // Import the image
import Btn from "./global/Btn";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const handleSubmit = () => {
      if (loading.value) return;
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        // alert("Form submitted successfully!");
      }, 2000);
    };

    return { loading, handleSubmit };
  },
  render() {
    return (
      <section class="py-16 bg-gray-100 relative">
        <div class="shape-line">
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
        <div class="shape-line-2">
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
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div class="text-left ">
              <small class="uppercase font-bold text-gray-500 tracking-wider">
                About Me
              </small>
              <h2 class="text-4xl font-bold text-blue-900 mt-2 mb-4">
                Pim Panharith
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                I'm a passionate developer with expertise in Vue.js, JSX, and
                modern web technologies.
              </p>
              <div className="mb-3">
                <Btn
                  class="primary-btn-outline"
                  text="Resume"
                  loading={this.loading}
                  onClick={this.handleSubmit}
                />
              </div>
              <div className="flex gap-4 items-center">
                <a
                  href="http://"
                  target="_blank"
                  className="text-3xl text-blue-900"
                >
                  <i class="fa-brands fa-telegram"></i>
                </a>
                <a
                  href="http://"
                  target="_blank"
                  className="text-3xl text-blue-900"
                >
                  <i class="fa-brands fa-google"></i>{" "}
                </a>
                <a
                  href="http://"
                  target="_blank"
                  className="text-3xl text-blue-900"
                >
                  <i class="fa-brands fa-linkedin"></i>{" "}
                </a>
                <a
                  href="http://"
                  target="_blank"
                  className="text-3xl text-blue-900"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div class="flex justify-center">
              <div className="bg-profile-image">
                <img
                  src={profileImage}
                  alt="Pim Panharith"
                  class="w-full max-w-sm rounded-lg shadow-lg object-cover relative z-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
});
