import Image from "next/image";

const skills = [
  {
    name: "html",
    badge: "/assets/skills/html.png",
  },
  {
    name: "css",
    badge: "/assets/skills/css.png",
  },
  {
    name: "javascript",
    badge: "/assets/skills/javascript.png",
  },
  {
    name: "react",
    badge: "/assets/skills/react.png",
  },
  {
    name: "nextjs",
    badge: "/assets/skills/nextjs.png",
  },
  {
    name: "tailwindcss",
    badge: "/assets/skills/tailwind.png",
  },
  {
    name: "vue",
    badge: "/assets/skills/vue.png",
  },
  {
    name: "nuxtjs",
    badge: "/assets/skills/nuxt.png",
  },
  {
    name: "vuetify",
    badge: "/assets/skills/vuetify.png",
  },
];

export default function Stack() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Front End Stack
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I have a foundation in Semantic HTML, External/Internal/Inline CSS, and Vanilla JavaScript. My preffered development method is with JavaScript Frameworks/Libraries such as React and Vue as well as CSS Frameworks like Tailwind. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">I also really enjoy the Swift programming language and iOS development. Having a Mobile Application and Web Application seamlessly share a Back End makes me happy.</p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {skills.map((skill) => (
              <div key={skills.name}>
                <Image
                      className="h-20 w-auto mx-auto"
                      src={skill.badge}
                      alt={skill.name}
                      height="100"
                      width="100"
                    />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
