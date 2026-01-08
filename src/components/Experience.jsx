import { ref } from "vue";

export default {
  setup() {
    const experienceLists = ref([
      {
        id: 1,
        title: "Backend - Internship (Full-time)",
        location: "iOne Co. Ltd",
        year: " SEP 2025 - DEC 2025",
        description: [
          "Interned as a Backend Developer, handling server-side logic",
          "Developed FastAPI microservices and internal service communication",
          "Containerized services using Docker",
          "Worked with PostgreSQL and object storage (MinIO)",
          "Integrate and develop user interface with Next.js",
        ],
      },
      {
        id: 2,
        title: "Developer - Internship (Part-time, Remote)",
        location: "Western University",
        year: " AUG 2025 - PRESENT",
        description: [
          "Developed and maintance APIs using Laravel Framework ",
          "Collaborate with application developer",
          "Implement real time feature with Firebase and cron job",
          "Built and integrated frontend features using Vue.js",
        ],
      },
    ]);
    return () => (
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          <i class="fa-regular fa-flag me-3"></i> Experience
        </h1>
        {experienceLists.value.map((item, index) => (
          <div key={item.id} class="grid grid-cols-12 mb-3">
            <div class="relative col-span-1">
              <i class="fa-regular fa-diploma radio-control text-blue-900"></i>
              <div className="line-date"></div>
              {/* Add the line except for the last item */}
              {index !== experienceLists.value.length - 1 && (
                <div class="w-[2px] bg-blue-900 flex-1 mt-1"></div>
              )}
            </div>
            <div class="ml-4 col-span-11">
              <div className="flex justify-between align-center">
                <h2 class="font-semibold text-blue-950">{item.location}</h2>
                <div class="text-sm text-gray-500 font-medium">{item.year}</div>
              </div>
              <span className="font-medium">{item.title}</span>
              <ul className="list-disc pl-5 text-gray-700 mt-1">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
