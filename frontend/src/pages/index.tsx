import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header/header";
import About from "../components/about/about";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <About />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
