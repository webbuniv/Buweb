'use client';
import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import flatpickr from "flatpickr";
import { CreateTeam } from "@/lib/actions/team.actions";
import { useRouter } from "next/navigation";

const FormLayout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const [state, formAction] = useFormState(CreateTeam, {});

  useEffect(() => {
    setIsSubmitting(true);
    if (state.error) {
      setErrorMessage(state.error);
    }
    if (state.success) {
      setIsSubmitting(false);
      alert('Board Member created successfully!');
      router.push('/teams');
    }
  }, [state, router]);

  useEffect(() => {
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      dateFormat: "Y-m-d",
      prevArrow: '<svg width="7" height="11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow: '<svg width="7" height="11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);

  return (
    <>
      <Breadcrumb pageName="Create News" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Event
            </h3>
          </div>
          <form action={formAction}>
            <div className="p-6.5">
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Name <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your title"
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Photo
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  required
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Position <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    required
                    placeholder="Enter position"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
              </div>


              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Bio<span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={4}
                  name="bio"
                  id="bio"
                  required
                  placeholder="Type Bio"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Quote<span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  name="quote"
                  id="quote"
                  required
                  placeholder="Type Quote"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Create Board Member
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default FormLayout;
