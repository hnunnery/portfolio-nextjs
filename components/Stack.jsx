import Image from "next/image";

const frontEndSkills = [
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

const backEndSkills = [
  {
    name: "firebase",
    badge: "/assets/skills/firebase.png",
  },
  {
    name: "azure",
    badge: "/assets/skills/azure.png",
  },
  {
    name: "amplify",
    badge: "/assets/skills/amplify.png",
  },
  {
    name: "node",
    badge: "/assets/skills/node.png",
  },
  {
    name: "dotnet",
    badge: "/assets/skills/dotnet.png",
  },
  {
    name: "sql",
    badge: "/assets/skills/sql.png",
  },
  {
    name: "csharp",
    badge: "/assets/skills/csharp.png",
  },
  {
    name: "java",
    badge: "/assets/skills/java.png",
  },
  {
    name: "python",
    badge: "/assets/skills/python.png",
  },
];

const tools = [
  {
    name: "github",
    badge: "/assets/skills/github.png",
  },
  {
    name: "copilot",
    badge: "/assets/skills/copilot.png",
  },
  {
    name: "vscode",
    badge: "/assets/skills/vscode.png",
  },
];

export default function Stack() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900" id="stack">
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Front End Stack
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                I have a foundation in Semantic HTML, External/Internal/Inline
                CSS, and Vanilla JavaScript. My preffered development method is
                with JavaScript Frameworks/Libraries such as React and Vue as
                well as CSS Frameworks like Tailwind.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                I also really enjoy the Swift programming language and iOS
                development. Having a Mobile Application and Web Application
                seamlessly share a Back End makes me happy.
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {frontEndSkills.map((skill) => (
                <div key={frontEndSkills.name}>
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
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Back End Stack
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                I lean toward Backend-as-a-Service (BaaS) Cloud Solutions such
                as Firebase, Azure App Service, and AWS Amplify.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                I also have experience with API Development using Node.js and
                .NET framework. My past use of Python, Java, and C# makes me
                comfortable using any language and framework. I have the ability
                and desire to learn new technologies quickly.
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {backEndSkills.map((skill) => (
                <div key={backEndSkills.name}>
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
      <div className="pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Development Tools
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                I use GitHub for version control and collaboration. The way GitHub CoPilot has sped up my development is amazing. I use VS Code as my IDE and I love the extensions that are available for it.
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              {tools.map((tool) => (
                <div key={tools.name}>
                  <Image
                    className="h-20 w-auto mx-auto"
                    src={tool.badge}
                    alt={tool.name}
                    height="100"
                    width="100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
