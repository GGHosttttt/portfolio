// src/components/About.jsx
import { defineComponent } from "vue";
import { ref } from "vue";
import profileImage from "../assets/images/panharith.png"; // Import the image
import Btn from "./global/Btn";
import wu from "@/assets/images/school/wu.png";
import ant from "@/assets/images/school/ant.png";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const handleSubmit = () => {
      if (loading.value) return;
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        const link = document.createElement("a");
        link.href = "/files/resume.pdf";
        link.download = "Pim_Panharith_CV.pdf";
        link.click();
      }, 2000);
    };

    return { loading, handleSubmit };
  },
  render() {
    return (
      <section class="py-16 bg-gray-100 relative">
        <div class="shape-line shape-line-1">
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
        <div class="shape-line shape-line-2">
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
        <div class="container mx-auto ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-custom-400 items-center">
            {" "}
            {/* Text Section */}
            <div class="text-left ">
              <small class="uppercase font-bold text-gray-500 tracking-wider">
                About Me
              </small>
              <h2 class="text-4xl font-bold text-blue-900 mt-2 mb-4">
                Pim Panharith
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                I'm senior year student from <strong>Western University</strong>
                , a Web Developer with expertise both <strong>Frontend</strong>{" "}
                and
                <strong> Backend</strong>. When it comes to development and
                collboration, I'm able to solve problem and work sync with the
                team.
              </p>
              <div className="mb-5 flex flex-wrap gap-4">
                <Btn
                  text="Resume"
                  loading={this.loading}
                  onClick={this.handleSubmit}
                />
                <div className="col-12 flex gap-4 items-center">
                  <a
                    href="https://t.me/PanharithPim"
                    target="_blank"
                    className="text-3xl text-blue-900"
                  >
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                  <a
                    href="mailto:pimpanharith@gmail.com"
                    target="_blank"
                    className="text-3xl text-blue-900"
                  >
                    <i class="fa-brands fa-google"></i>{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pimpanharith/"
                    target="_blank"
                    className="text-3xl text-blue-900"
                  >
                    <i class="fa-brands fa-linkedin"></i>{" "}
                  </a>
                  <a
                    href="https://github.com/GGHosttttt"
                    target="_blank"
                    className="text-3xl text-blue-900"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center row-gap-15 column-gap-5 border border-gray-300 bg-blue-950/9 p-3 rounded-2xl">
                <img src={wu} alt="" className="h-[80px]" />
                <img src={ant} alt="" className="h-[80px]" />
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
