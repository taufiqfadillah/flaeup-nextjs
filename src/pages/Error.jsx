"use client";

import React from "react";
import Error from "../components/error.jsx";
import Loader from "../components/loader.jsx";

const ErrorPage = () => {
  React.useEffect(() => {
    document.title = "Error 404 | Page Not Found.";
  }, []);

  return (
    <>
      <Error />
      <Loader />
    </>
  );
};

export default ErrorPage;
