import React from "react";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import Hero from "./components/hero";
import Sponsors from "./components/sponsors";
import HowItWorks from "./components/how-it-works";
import Features from "./components/features";
import OCConnectWrapper from "@/layouts/OCConnectWrapper";

function Home() {
  return (
    <React.Fragment>
      <OCConnectWrapper>
        <main>
          <Header />
          <Hero />
          <Sponsors />
          <HowItWorks />
          <Features />
          <Footer />
        </main>
      </OCConnectWrapper>
    </React.Fragment>
  );
}

export default Home;
