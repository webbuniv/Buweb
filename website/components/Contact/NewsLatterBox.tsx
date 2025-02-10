"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import life from '@/public/images/graduation/ca.jpeg';
import { CreateNewsLetter } from "@/lib/actions/newletter.actions";
import OtpModal from "@/components/OTPModal";

const NewsLetterBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState("");
  const [accountId, setAccountId] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    if (!email || !fullName) {
      setStatus("All fields are required");
      return;
    }

    try {
      const user = await CreateNewsLetter({ email, fullName });
      setAccountId(user.accountId);
      setEmail(user.email);
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

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
      />
      <button
        type="submit"
        className="w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
      >
        Subscribe
      </button>
    </form>
  );

  return (
    <div>
      {/* On big devices */}
      <div
        className="hidden md:flex flex-row w-[1200px] mx-auto justify-start items-center gap-28 wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10"
        data-wow-delay=".2s"
      >
        <div>
          <Image src={life || "/placeholder.svg"} width={400} height={400} alt="life" className="rounded" />
        </div>
        <div className="flex-1">
          <div>
            <h3 className="mb-2 text-2xl font-bold leading-tight text-black dark:text-white">
              Subscribe to receive latest news and updates from us.
            </h3>
            <p className="mb-4 border-b border-body-color border-opacity-25 pb-4 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
              Please subscribe to our newsletter
            </p>
          </div>

          <div>
            {renderForm()}
            <p className="mt-4 text-center text-base font-medium leading-relaxed text-body-color">
              No spam guaranteed, so please don&apos;t send any spam mail.
            </p>
            {status && (
              <p
                className="mt-4 text-center text-base font-medium leading-relaxed"
                style={{ color: "green" }}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* On small devices */}
      <div
        className="block md:hidden wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
        data-wow-delay=".2s"
      >
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Subscribe to receive latest news and updates from us.
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-25 pb-6 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
          Please subscribe to our newsletter
        </p>
        {renderForm()}
        <p className="mt-4 text-center text-base font-medium leading-relaxed text-body-color">
          No spam guaranteed, so please don&apos;t send any spam mail.
        </p>
        {status && (
          <p
            className="mt-4 text-center text-base font-medium leading-relaxed"
            style={{ color: "green" }}
          >
            {status}
          </p>
        )}
      </div>
      {accountId && (
        <OtpModal email={email} accountId={accountId} />
      )}
    </div>
  );
};

export default NewsLetterBox;