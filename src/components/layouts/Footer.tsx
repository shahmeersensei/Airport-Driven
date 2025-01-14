import React from "react";
import { FaPhoneAlt, FaEnvelope, FaStar, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
      <h2 className="uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 font-rockstar font-extrabold">
        get in touch with us
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <Image
            src={"/LOGO.png"}
            alt="Logo"
            className="bg-white p-2 rounded-lg"
            width={140}
            height={100}
          />
          <p className="mt-2 text-left  sm:text-lg md:text-left">
            {
              "Reliable airport transfers and city tours. Experience comfort and convenience with [Your Company Name]."
            }
          </p>
          <div className="flex mt-4 space-x-3">
            <Link
              href="https://www.facebook.com/AirportDriven"
              target="_blank"
              className="w-fit p-2 bg-primary rounded-full"
            >
              <FaFacebookF className="cursor-pointer" />
            </Link>
            <Link
              href="https://x.com/AirportDriven"
              target="_blank"
              className="w-fit p-2 bg-primary rounded-full"
            >
              <FaTwitter className="cursor-pointer" />
            </Link>
            <Link
              href="https://www.instagram.com/airportdriven/"
              target="_blank"
              className="w-fit p-2 bg-primary rounded-full"
            >
              <FaInstagram className="cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/airportdriven/?viewAsMember=true"
              target="_blank"
              className="w-fit p-2 bg-primary rounded-full"
            >
              <FaLinkedin className="cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Airport Runs</li>
            <li className="hover:underline cursor-pointer">Station Runs</li>
            <li className="hover:underline cursor-pointer">Cruise</li>
            <li className="hover:underline cursor-pointer">Special Offers</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Driver Login</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">CONTACT DETAILS</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <div className="w-fit p-2 bg-primary rounded-full">
                <FaPhoneAlt />
              </div>
              <span>+44 2080 504 099</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-fit p-2 bg-primary rounded-full">
                <FiMapPin />
              </div>
              <span>Bath Road Hayes London United Kingdom UB3</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-fit p-2 bg-primary rounded-full">
                <FaEnvelope />
              </div>
              <span>Hello@Airportdriven.Com</span>
            </li>

            <li className="flex items-center space-x-2">
              <span>Review On</span>
              <FaStar />
              <FaStar />
              <FaStar />
            </li>
            <li className="flex items-center space-x-2">
              <Image src={"/trustpilot.png"} alt="" height={100} width={90} />
              <span>(30 Reviews)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>Review On</span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </li>
            <li className="flex items-center space-x-2">
              <Image src={"/google.png"} alt="" height={100} width={90} />
              <span>(45 Reviews)</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">
            Subscribe for Exclusive Offers
          </h3>
          <p className="mb-4 text-left">
            {
              "Get travel tips, special deals, and updates from [Your Company Name]. Sign up now!"
            }
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Type Here"
              className="flex-grow p-2 rounded text-black"
            />
            <button className="bg-primary p-2 rounded hover:bg-primary-light">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left px-4">
        <p>© 2024 Copyright Airport Driven. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
