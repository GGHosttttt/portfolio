export default {
  setup() {
    const carouselItems = [
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg",
        alt: "HTML",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg",
        alt: "CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/php/php-original.svg",
        alt: "PHP",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-original.svg",
        alt: "Bootstrap",
      },
      {
        src: "https://laravel.com/img/logomark.min.svg",
        alt: "Laravel",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuejs/vuejs-original.svg",
        alt: "Vue.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/github/github-original.svg",
        alt: "GitHub",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg",
        alt: "Python",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/django.svg",
        alt: "Django",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg",
        alt: "Tailwind CSS",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/fastapi/fastapi-original.svg",
        alt: "FastAPI",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-original.svg",
        alt: "Next.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/postgresql/postgresql-original.svg",
        alt: "PostgreSQL",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/docker/docker-original.svg",
        alt: "Docker",
      },
    ];

    return () => (
      <div class="py-5">
        <div class="overflow-hidden relative">
          <div class="grid grid-rows-2 gap-4">
            {/* First row (scrolls left) */}
            <div class="carousel-container">
              <div class="carousel-track flex space-x-4 animate-marquee">
                {carouselItems
                  .slice(0, Math.ceil(carouselItems.length / 2))
                  .map((item, index) => (
                    <div key={`a-${index}`} class="carousel-item">
                      <img
                        src={item.src}
                        alt={item.alt}
                        class="h-16 object-contain"
                      />
                    </div>
                  ))}
                {carouselItems
                  .slice(0, Math.ceil(carouselItems.length / 2))
                  .map((item, index) => (
                    <div key={`b-${index}`} class="carousel-item">
                      <img
                        src={item.src}
                        alt={item.alt}
                        class="h-16 object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* Second row (scrolls right) */}
            <div class="carousel-container">
              <div class="carousel-track flex space-x-4 animate-marquee-reverse">
                {carouselItems
                  .slice(Math.ceil(carouselItems.length / 2))
                  .map((item, index) => (
                    <div key={`c-${index}`} class="carousel-item">
                      <img
                        src={item.src}
                        alt={item.alt}
                        class="h-16 object-contain"
                      />
                    </div>
                  ))}
                {carouselItems
                  .slice(Math.ceil(carouselItems.length / 2))
                  .map((item, index) => (
                    <div key={`d-${index}`} class="carousel-item">
                      <img
                        src={item.src}
                        alt={item.alt}
                        class="h-16 object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
