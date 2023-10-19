import React, { ReactNode, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<TProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title ? title + " || " : ""} Hidden World`;
  }, [title]);

  return (
    <>
      <main className="main">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default Layout;
