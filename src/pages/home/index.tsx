import React from "react";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "./components/hero";
import Sponsors from "./components/sponsors";
import HowItWorks from "./components/how-it-works";
import Features from "./components/features";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Sponsors />
      <HowItWorks />
      <Features />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
