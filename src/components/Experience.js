import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a className="text-primary dark:text-primaryDark capitalize cursor-pointer">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px] "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Web Developer"
            company="Freelancer"
            time="January 2023 - Present"
            address="Remote"
            work="• I developed fully responsive websites using React.js, translating Figma designs
into high-quality, user-centric interfaces.
• Provided expertise in fixing HTML, CSS, JavaScript, and React bugs, ensuring
seamless functionality and optimal user experiences.
• Spearheaded the creation of custom websites using a tech stack comprising
React.js, Tailwind CSS, and Next.js, resulting in visually appealing and performant
web solutions."
          />

          <Details
            position="Web Developer"
            company="CoverApp Digital"
            time="2020-2022"
            address="Kyrenia, North Cyprus"
            work="• Designed user-friendly and visually appealing user interfaces to enhance the
overall user experience.
• Worked well independently and within a team of 5 developers.
• Worked closely with the UI/UX team and translated Figma designs into fully
responsive user interfaces.
• Utilized React to create a single-page application that improved page load times
by 50%.
• Optimized web page loading times by 30%, improving user experience and
engagement.
• Developed a responsive website for an e-commerce company that increased user
engagement and page load times by 30%
•Collaborated with cross-functional teams to identify customer requirements and
develop technical solutions.
• Integrated APIs and third-party services to expand the functionality of the apps
and improve user engagement.
• Developed full-stack web applications from scratch, including back-end services,
front-end interface, and database"
          />

          <Details
            position="Junior Frontend Developer"
            company="First World Connect Ltd."
            time="2017-2019"
            address="Lagos State, Nigeria"
            work="• Successfully identified, diagnosed, and fixed website problems, including broken
links, typographical errors, and formatting issues.
• Helped to achieve a consistent look and visual theme across the website by
promoting uniform fonts, formatting, images, and layout.
• Worked to assess competing websites regarding content, look, and feel.
• Working closely with our product UX team to find practical and efficient solutions
to complex problems.
• Developed a secure, interactive web application with a modern front-end
framework and an intuitive user interface"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
