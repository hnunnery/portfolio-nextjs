import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FullStackApps | Hunter Nunnery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Projects />
      <Stack />
      <Blog />
      <Contact />
    </div>
  );
}
