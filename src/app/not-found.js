import React from "react";
import Link from "next/link";

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-800 via-gray-500 to-cyan-500 px-4">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-cyan-600 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-900  text-white rounded-xl shadow-md hover:opacity-90 transition duration-300"
        >
          Go Back Home
        </Link>

        {/* Small animation dot */}
        <div className="mt-10 flex justify-center gap-2">
          <span className="w-5 h-5 bg-blue-300 rounded-full animate-bounce"></span>
          <span className="w-5 h-5 bg-purple-300 rounded-full animate-bounce delay-150"></span>
          <span className="w-5 h-5 bg-pink-300 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
