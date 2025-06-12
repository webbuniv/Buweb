// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto" style={{ zIndex: 1050 }}>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-h-screen max-w-3xl p-5 mt-10 mb-10 overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Modal Body */}
        <div className="py-4">{children}</div>
        {/* Modal Footer */}
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="text-gray-900 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
