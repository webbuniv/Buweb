'use client';

import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import flatpickr from "flatpickr";
import { updateNews, getNewsById } from "@/lib/actions/news.actions";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};


interface NewsItem {
    id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    category: string;
    content: string;
    file: File;
}

interface UpdateNewsFormProps {
    newsItem: NewsItem | null; // Ensure it's either NewsItem or null
}

const UpdateNewsForm = ({ params }: Props ) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [news, setNews] = useState<NewsItem | null>(null);
  const router = useRouter();

  const { id } = params;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsById(id);
        setNews(response);
      } catch (error) {
        console.error("Error fetching news:", error);
        setErrorMessage("Failed to load news details.");
      }
    };
    fetchNews();
  }, [id]);

  const [state, formAction] = useFormState(updateNews, {});

  useEffect(() => {
    // Handle success and error states from the form action
    if (state.error) {
      setIsSubmitting(false);
      setErrorMessage(state.error);
    }
    if (state.success) {
      setIsSubmitting(false);
      alert("News updated successfully!");
      router.push("/news");
    }
  }, [state, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Clear any previous error messages

    const formData = new FormData(event.currentTarget);

    try {
      await formAction();
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  if (!news) {
    return <div>Loading...</div>; // Loading state while fetching
  }

  return (
    <>
      <Breadcrumb pageName="Update News" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Update News</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
            {news.id && <input type="hidden" name="id" value={news.id} />}
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Title <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={news.title}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Summary <span className="text-meta-1">*</span>
              </label>
              <textarea
                rows={4}
                name="summary"
                id="summary"
                defaultValue={news.summary}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Photo
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 dark:border-form-strokedark dark:bg-form-input"
              />
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Author <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  defaultValue={news.author}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Date <span className="text-meta-1">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  defaultValue={news.date}
                  required
                  className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Category <span className="text-meta-1">*</span>
              </label>
              <select
                id="category"
                name="category"
                defaultValue={news.category}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              >
                <option value="Sports">Sports</option>
                <option value="General">General</option>
                <option value="Campus">Campus</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Content <span className="text-meta-1">*</span>
              </label>
              <textarea
                rows={10}
                name="content"
                id="content"
                defaultValue={news.content}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update News"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateNewsForm;
