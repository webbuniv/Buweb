'use client';

import React, { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import flatpickr from "flatpickr";
import { updateEvents, getEventsById } from "@/lib/actions/events.actions";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};


// interface EventItem {
//     id: string;
//     title: string;
//     organizer: string;
//     location: string;
//     description: string;
//     file: File;
//     date: string;
// }

interface UpdateEventsFormProps {
    newsItem: EventItem | null; 
}

const UpdateNewsForm = ({ params }: Props ) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [event, setEvent] = useState<EventItem | null>(null);
  const router = useRouter();

  const { id } = params;

  const wrappedUpdateEvents = async (
    state: CreateEventResponse,
    payload: FormData
  ): Promise<CreateEventResponse> => {
    const id = payload.get('id') as string;
    return await updateEvents(id, payload);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEventsById(id);
        setEvent(response);
      } catch (error) {
        console.error("Error fetching news:", error);
        setErrorMessage("Failed to load news details.");
      }
    };
    fetchEvents();
  }, [id]);

  const [state, formAction] = useFormState(wrappedUpdateEvents, {});

  useEffect(() => {
    if (state.error) {
      setIsSubmitting(false);
      setErrorMessage(state.error);
    }
    if (state.success) {
      setIsSubmitting(false);
      alert("Event updated successfully!");
      router.push("/events");
    }
  }, [state, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Clear any previous error messages

    const formData = new FormData(event.currentTarget);

    try {
      await formAction(formData);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  if (!event) {
    return <div>Loading...</div>; 
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
            {event.id && <input type="hidden" name="id" value={event.id} />}
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Title <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={event.title}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                  name="organizer"
                  id="organizer"
                  defaultValue={event.organizer}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date <span className="text-meta-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                      type="date"
                      name="date"
                      id="date"
                        defaultValue={event.date}
                      required
                        className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        placeholder="Select a date"
                        data-class="flatpickr-right"
                      />

                      <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                            fill="#64748B"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

            

            <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Location <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  defaultValue={event.location}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
            </div>
            <div className="mb-6">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Content <span className="text-meta-1">*</span>
              </label>
              <textarea
                rows={10}
                name="content"
                id="content"
                defaultValue={event.description}
                required
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Event"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateNewsForm;
