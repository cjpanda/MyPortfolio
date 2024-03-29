import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import aboutme from "../../public/images/profile/aboutme.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Ceejay| About Page</title>
        <meta
          name="Portfolio About Page"
          content="Full Stack Developer Portfolio About Me Page"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:text-6xl xs:text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start text-dark/75 dark:text-light xl:col-span-4 md:order-2  md:col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>

              <p className="font-medium">
                Hello, My name is Benedict , a dedicated web developer with a
                flair for crafting stunning, functional, and user-centric web
                experiences. As a dynamic Front-end Developer, I have honed my
                expertise in key technologies including HTML/CSS, JavaScript,
                React, Next.js, and Tailwind CSS.
              </p>

              <p className="my-4 font-medium">
                My passion for enhancing software performance and my adeptness
                at seamlessly integrating web APIs distinguish my skill set. I
                bring a wealth of experience collaborating with international
                teams, and navigating diverse cultural landscapes effortlessly.
              </p>

              <p className="font-medium">
                My commitment to prioritizing user-centric solutions and
                consistently striving for technical excellence is unwavering. I
                am enthusiastic about contributing to the elevation of software
                solutions to global standards.
              </p>
            </div>

            <div className="col-span-3 relative h-max  rounded-3xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark " />
              <Image
                src={aboutme}
                alt="cjpanda"
                className="w-full h-auto  rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between text-dark dark:text-light xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
