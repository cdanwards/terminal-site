import React from "react";

const Download: React.FC = () => {
  return (
    <div>
      <p>You can download my resume as a PDF file:</p>
      <div className="mt-4">
        <a
          href="/dan-edwards-resume.pdf"
          download
          className="px-4 py-2 bg-deep-teal text-white rounded-md hover:bg-green-700 transition-colors inline-flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Download;
