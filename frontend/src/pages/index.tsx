import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header/header";
import About from "../components/about/about";
import Footer from "../components/footer/footer";
import Generator from "../components/generator/generator";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <About />
      <Generator />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
