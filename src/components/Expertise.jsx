import Carosel from "./global/Carosel";

export default {
  setup() {
    return () => (
      <div className="container mx-auto py-10 pb-0">
        <div className="">
          <h1 class="text-2xl font-bold text-gray-800 mb-6">
            <i class="fa-solid fa-code me-3"></i>
            Expertise
          </h1>
          <Carosel />
        </div>
      </div>
    );
  },
};
