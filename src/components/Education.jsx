import Carosel from "./global/Carosel";
import { ref } from "vue";

export default {
  setup() {
    const educationList = ref([
      {
        id: 1,
        title: "Bachelor Degree of Computer Science",
        location: "Western University",
        year: "2023-Present",
      },
      {
        id: 2,
        title:
          "Laravel Web Development - Full Scholarship Ministry of Post and Telecommunication and CBRD FUND",
        location: "ANT-- Abstraction of New Technology",
        year: "2024-2025",
      },
      {
        id: 3,
        title: "ESL Program",
        location: "BELTEI Internation School",
        year: "2014-2019",
      },
    ]);
    return () => (
      <div className="container mx-auto py-20">
        <div class="grid grid-cols-2 gap-4 ">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              <i class="fa-regular fa-diploma me-3"></i> Education
            </h1>
            {educationList.value.map((item, index) => (
              <div key={item.id} class="grid grid-cols-12 mb-3">
                <div class="relative col-span-1">
                  <i class="fa-light fa-graduation-cap radio-control text-blue-900"></i>
                  <div className="line-date"></div>
                  {/* Add the line except for the last item */}
                  {index !== educationList.value.length - 1 && (
                    <div class="w-[2px] bg-blue-900 flex-1 mt-1"></div>
                  )}
                </div>
                <div class="ml-4 col-span-11">
                  <h2 class="font-semibold text-blue-950">{item.title}</h2>
                  <span className="font-medium">{item.location}</span>
                  <div class="text-sm text-gray-500 font-medium">
                    {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">
              <i class="fa-solid fa-code me-3"></i>
              Expertise
            </h1>
            <Carosel />
          </div>
        </div>
      </div>
    );
  },
};
