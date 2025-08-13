import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContents from "./FloatingContents";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <FloatingContents 
        className={"floating-wrap"}
      />
      {children}
      <Footer />
    </>
  );
};

export default Page;
