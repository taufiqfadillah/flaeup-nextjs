"use client";

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-screen place-content-center justify-items-center align-items-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500 mb-10">
        404 | Page Not Found
      </h1>
      <Link
        to="/"
        className="inline-block border-b border-gray-300 px-5 py-2 text-center text-base text-gray-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
