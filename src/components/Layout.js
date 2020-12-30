import React from "react";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { Helmet } from "react-helmet";

export default ({ pageTitle = "" }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{pageTitle || title}</title>
      </Helmet>
    </>
  );
};
