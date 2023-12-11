import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/FullResponsiveLandingPage.png";
import project2 from "../../public/images/projects/CarlandRental.png";
import project3 from "../../public/images/projects/responsiveproject.png";
import project4 from "../../public/images/projects/promptpal.png";
import project5 from "../../public/images/projects/dashboard.png";
import project6 from "../../public/images/projects/fullstackblog.png";
import project7 from "../../public/images/projects/portfolio-page.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border-4 border-solid 
      border-dark bg-light shadow-2xl dark:bg-dark dark:border-light p-12 relative lg:flex-col lg:p-8 xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark xs:-right-2 sm:h-[102%] xs:w-full" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-3xl lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between  pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg sm:px-4 sm:text-base  font-semibold dark:bg-light dark:text-dark hover:dark:bg-primaryDark hover:bg-purple-900"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-3xl border-4 border-solid border-dark bg-light dark:bg-dark dark:border-light dark:border-4 p-6 relative xs:p-4:">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark md:-right-2 md:[101%] xs:h-[102%]   " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-3xl"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium dark:text-primaryDark text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark md:text-base dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold hover:dark:bg-primaryDark hover:bg-purple-900 "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>cjpanda | Projects</title>
        <meta name="Portfolio Projects" content="Browse through my projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Project Library"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* Project 1 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Ecommerce Dashboard + Store"
                img={project5}
                summary=" This dashboard features one or more Ecommerce stores.
              Developed Using: Reactjs, NextJs, Typescript, Shadcn UI, Database:Planetscale(MySQL), PrismaDB, 
              TailwindCSS, Stripe API, Clerk for User Account and Auth, Cloudinary for Image Uploads."
                link=" https://ecommerce-dashboard-theta-nine.vercel.app"
                github="https://github.com/cjpanda/ecommerce-dashboard"
                type="Featured Project(Fullstack)"
              />
            </div>
            {/* Project 2 small */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="HooBank Landing Page"
                img={project1}
                link="https://cjpanda.github.io/landingpage_bank/"
                github="https://github.com/cjpanda/landingpage_bank"
                type="FrontEnd Project"
              />
            </div>
            {/* Project 3 small */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="GPT3 Landing Page"
                img={project3}
                link="https://cjpanda.github.io/gpt3-ben/"
                github="https://github.com/cjpanda/gpt3-ben"
                type="Frontend Project"
              />
            </div>
            {/* Project 4 */}
            <div className="col-span-12">
              <FeaturedProject
                title="CarLand Rental "
                img={project2}
                summary="A Responsive Car Rental website.
                Stack: React, NextJs, TailwindCSS, Framer Motion, React Icons, Headless UI"
                link="https://carland-rental.vercel.app/"
                github="https://github.com/cjpanda/CarlandRental"
                type="Featured Project"
              />
            </div>
            {/* Project 5 small */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Blog"
                img={project6}
                link="https://github.com/cjpanda/fullstackblog_project"
                github="https://github.com/cjpanda/fullstackblog_project"
                type="Fullstack Project"
              />
            </div>
            {/* Project 6 small */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="My Portfolio"
                img={project7}
                link="https://cjpanda.github.io/MyPortfolio/"
                github="https://github.com/cjpanda/MyPortfolio"
                type="Frontend Project"
              />
            </div>
            {/* Project 7 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Project PromptPal"
                img={project4}
                summary=" PromptPal is an open-source tool to create and share creative AI prompts. Features Include; User Login with GoogleAuth, User Profile, Create Save and Delete Prompts, NextAuth for Authentication.
              This Project was developed with NextJS, TailwindCSS, MongoDB, GoogleAuth, NextAuth"
                link="https://promptpal-project-nyk79e276-cjpanda.vercel.app/"
                github="https://github.com/cjpanda/promptpal_project"
                type="Featured Project(FullStack)"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
