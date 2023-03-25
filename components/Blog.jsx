import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Get started with Next.js and Tailwind",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://res.cloudinary.com/missionwebdev/image/upload/c_scale,q_auto:eco,w_400/v1679769225/FullStackApps/blogphoto1.jpg",
    imageDescription: "man coding",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Front End", href: "#" },
    author: {
      name: "Hunter Nunnery",
      role: "Software Developer",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/missionwebdev/image/upload/c_scale,q_auto:eco,r_0,w_100/v1679769877/FullStackApps/headshot.jpg",
      imageDescription: "author image",
    },
  },
  {
    id: 1,
    title: "Java or JavaScript?",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    imageDescription: "computer desk",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Back End", href: "#" },
    author: {
      name: "Hunter Nunnery",
      role: "Software Developer",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/missionwebdev/image/upload/c_scale,q_auto:eco,r_0,w_100/v1679769877/FullStackApps/headshot.jpg",
      imageDescription: "author image",
    },
  },
  {
    id: 1,
    title: "React vs. Vue: Which is better for you?",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://res.cloudinary.com/missionwebdev/image/upload/c_scale,q_auto:eco,w_400/v1679769228/FullStackApps/blogphoto3.jpg",
    imageDescription: "two men working at computers",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Full Stack", href: "#" },
    author: {
      name: "Hunter Nunnery",
      role: "Software Developer",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/missionwebdev/image/upload/c_scale,q_auto:eco,r_0,w_100/v1679769877/FullStackApps/headshot.jpg",
      imageDescription: "author image",
    },
  },
];

export default function Example() {
  return (
    <div className="bg-gray-900 pt-14 pb-28 sm:pt-24 sm:pb-36" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Articles from the Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            This has been a lot of fun to create and use.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.imageDescription}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={400}
                  height={270}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-500/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-indigo-600 py-1.5 px-3 font-medium text-gray-300 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-400 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.imageDescription}
                    className="h-10 w-10 rounded-full bg-gray-100"
                    width={40}
                    height={40}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-300">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
