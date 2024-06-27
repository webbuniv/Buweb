"use client";
import React, { useState } from "react";
import { subscribeToNewsletter } from "@/lib/requests";
import { toast } from "sonner";
import Brands from "../Brands";
import Image from "next/image";
import life from '@/public/images/features/life.jpg';

const NewsLatterBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    if (!email) {
      setStatus("Email is required");
      return;
    }

    try {
      await subscribeToNewsletter(email);
      localStorage.setItem("newsletter", email);
      toast.success(
        "Subscribed to newsletter! Check your email to confirm your subscription."
      );
      setStatus(
        "Subscribed to newsletter! Check your email to confirm your subscription."
      );
    } catch (error) {
      setStatus("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div>
      {/* On big devices */}
      <div
        className="hidden md:flex flex-row w-[1200px] mx-auto justify-center items-center gap-20 wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10"
        data-wow-delay=".2s"
      >
        <div>
          <Image src={life} width={500} height={500} alt="life" className="rounded" />
        </div>
        <div>
          <div>
            <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
              Subscribe to receive the latest from us.
            </h3>
            <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
              Please subscribe to our newsletter
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
              />
              <button
                type="submit"
                className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
              >
                Subscribe
              </button>
              <p className="text-center text-base font-medium leading-relaxed text-body-color">
                No spam guaranteed, so please don’t send any spam mail.
              </p>
              {status && (
                <p
                  className="mt-4 text-center text-base font-medium leading-relaxed "
                  style={{ color: "green" }}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* On small devices */}
      <div
        className="block md:hidden wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
        data-wow-delay=".2s"
      >
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Subscribe to receive the latest from us.
        </h3>
        <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
          Please subscribe to our newsletter
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
          />
          <button
            type="submit"
            className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
          >
            Subscribe
          </button>
          <p className="text-center text-base font-medium leading-relaxed text-body-color">
            No spam guaranteed, so please don’t send any spam mail.
          </p>
          {status && (
            <p
              className="mt-4 text-center text-base font-medium leading-relaxed "
              style={{ color: "green" }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsLatterBox;
