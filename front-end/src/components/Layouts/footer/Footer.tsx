import Link from "next/link";
import React from "react";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

const Links = ({ name, href }: { name: string; href: string }) => {
  return (
    <li className="pb-1">
      <Link href={`/${href}`}>
        <a className="underline">{name}</a>
      </Link>
    </li>
  );
};
const Footer = () => {
  return (
    <footer className=" p-2 bg-white">
      <section className="flex justify-between items-center flex-wrap container">
        <div>
          <img
            src="https://dogsonthestreets.org/wp-content/uploads/2021/07/payment-Capture.jpg"
            alt=""
            className="h-8"
          />
        </div>

        <div className="flex gap-2 items-center">
          <small>Stay connected:</small>
          <RiFacebookFill size={20} />
          <RiInstagramLine size={20} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
