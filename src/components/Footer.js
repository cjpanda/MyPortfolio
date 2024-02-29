import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between text-dark dark:text-light lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <div className="flex items-center lg:py-2">
          Built by &nbsp;
          <Link
            href="https://github.com/cjpanda"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Benedict(Ceejay)
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
