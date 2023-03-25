import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-28 pb-16 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            Hunter Nunnery
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-indigo-500 sm:text-6xl">Full Stack Developer</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I&apos;m a full stack software developer with a passion for building elegant and functional web applications. Contact me today to get started on your next project.
          </p>
        </div>
      </div>
    </div>
  );
}
