import AnimatedText from "@/components/AnimatedText";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const contact = () => {
  return (
    <>
      <Head>
        <title>Ceejay | Contact Me</title>
        <meta
          name="Portfolio Contact Me"
          content="Full Stack Developer Portfolio Contact Me Page"
        />
      </Head>
      <TransitionEffect />

      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Contact Me"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="flex items-center justify-between w-full lg:flex-col">
            <motion.div
              className="w-1/2 md:w-full"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimatedText
                text="Get in Touch with Me."
                className="!text-7xl !text-left text-dark dark:text-light lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
              />
              <p className="my-4 text-base font-medium text-dark dark:text-light md:text-sm sm:text-xs">
                If you like what you see so far and you have questions for me?{" "}
                <br />
                Please fill in the form and i will get back to you promptly
              </p>
            </motion.div>

            <div className="w-1/2 flex flex-col items-center self-center md:w-full">
              <Form />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
