import Image from "next/image";

const projects = [
  {
    name: "Bingeworthy - Rate Television Shows",
    description:
      "Authenticated users can create, read, update, and delete ratings for shows",
    imageUrl:
      "https://res.cloudinary.com/missionwebdev/image/upload/c_fit,h_1216/v1679155832/BingeWorthy/Screenshot_2023-03-18_at_12.02.51_PM.png",
    siteUrl: "https://bingeworthy.netlify.app",
    badgeOne: "/assets/skills/vue.png",
    badgeTwo: "/assets/skills/nuxt.png",
    badgeThree: "/assets/skills/vuetify.png",
    badgeFour: "/assets/skills/firebase.png",
  },
  {
    name: "Stealth Entry CyberSecurity Solutions",
    description:
      "Created this website for a customer using VueJS and the NuxtJS framework",
    imageUrl:
      "https://res.cloudinary.com/missionwebdev/image/upload/v1551139322/StealthEntry/main.jpg",
    siteUrl: "https://stealthentry.netlify.app",
    badgeOne: "/assets/skills/vue.png",
    badgeTwo: "/assets/skills/nuxt.png",
    badgeThree: "/assets/skills/vuetify.png",
    badgeFour: "/assets/skills/firebase.png",
  },
  {
    name: "Veterans of War Aid Foundation",
    description:
      "Created this website as a volunteer developer for a non-profit organization",
    imageUrl:
      "https://res.cloudinary.com/missionwebdev/image/upload/v1553647520/VOWAID/vowaid-meta-card.jpg",
    siteUrl: "https://vowaid.netlify.app",
    badgeOne: "/assets/skills/vue.png",
    badgeTwo: "/assets/skills/nuxt.png",
    badgeThree: "/assets/skills/vuetify.png",
    badgeFour: "/assets/skills/firebase.png",
  },
];

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Some of my favorite projects that showcase the technologies,
            frameworks, and skills I use in my full staack web applications.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <li key={project.name}>
              <a href={project.siteUrl} target="_blank">
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={project.imageUrl}
                  alt=""
                  height="300"
                  width="400"
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {project.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {project.description}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src="/assets/skills/html.png"
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src="/assets/skills/css.png"
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src="/assets/skills/javascript.png"
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src={project.badgeOne}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src={project.badgeTwo}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src={project.badgeThree}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                  <li>
                    <Image
                      className="h-8 w-auto"
                      src={project.badgeFour}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </li>
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
