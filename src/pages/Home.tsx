import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurIn from "@/components/ui/blur-in";
import { BorderBeam } from "@/components/ui/border-beam";
import Grow from "@/components/ui/grow";
import PulsatingButton from "@/components/ui/pulsating-button";

import { useOCAuth } from "@opencampus/ocid-connect-js";

import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  BadgeDollarSign,
  Droplets,
  MousePointerClick,
  Pickaxe,
  Wallet,
  Rocket,
  Gift,
  Shield,
} from "lucide-react";
import * as React from "react";

function Home() {
  const { authState } = useOCAuth();

  React.useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <React.Fragment>
      <Header />
      <section
        id="hero"
        className="relative grid place-items-center min-h-[100dvh] overflow-hidden bg-transparent w-full"
      >
        <div className="mt-20 mb-24 z-10 container-fluid grid place-items-center px-4 md:px-0">
          <div className="z-10 flex items-center justify-center mb-8">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Eduquid</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <BlurIn
            word="Unlock Knowledge, Earn Rewards"
            className="text-4xl md:text-[86px] max-w-[960px] pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-blue-300 to-gray-100 bg-clip-text text-center font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10"
          />

          <BlurIn
            word="EduQuid combines the power of blockchain with interactive quizzes to create a rewarding learning experience. Test your knowledge, compete, and earn tokens—it's education like never before."
            className="text-md text-center font-normal md:text-md max-w-[768px] pointer-events-none text-white/30  leading-normal dark:from-white dark:to-slate-900/10"
          />

          <PulsatingButton pulseColor="#5964f6" className="px-12 py-4 mt-8">
            Get Started Now!
          </PulsatingButton>
        </div>

        <Grow
          className="rounded-2xl w-full md:w-3/4 lg:w-1/2 px-0 h-auto relative z-10 container-fluid"
          duration={0.75}
        >
          <img
            src="https://framerusercontent.com/images/JSakO3iDpBY0uvb9cOV7x278fQM.png?scale-down-to=1024"
            alt="hero"
            className="rounded-2xl object-contain w-full"
          />

          <BorderBeam />
        </Grow>

        <div className="absolute w-full -top-1/3 left-0 h-[140%] overflow-hidden">
          <img
            src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg?scale-down-to=1024"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      <section id="sponsors" className="container-fluid py-8 text-center">
        <h3 className="text-white/50 font-medium pb-4 text-lg">
          Trusted By Top Organizations
        </h3>
        <div className="overflow-hidden flex justify-center space-x-16">
          <img
            src="/assets/images/logos/educhain.png"
            width={180}
            height={75}
          />
          <img
            src="/assets/images/logos/opencampus.png"
            width={180}
            height={75}
          />
        </div>
      </section>

      <section
        id="how-it-works"
        className="container-fluid py-8 text-center grid md:grid-cols-2 gap-8"
      >
        <div className="relative h-full">
          <div className="sticky top-1/3 left-0">
            <h2 className="text-white text-7xl font-medium text-left">
              Turn Knowledge Into Rewards
            </h2>
            <p className="text-white/30 text-left text-lg">
              Dive into fun quizzes, earn tokens instantly, and reshape the way
              you learn and grow!
            </p>
          </div>
        </div>
        <div className="relative space-y-8">
          <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
            <div className="rounded-full p-4 bg-[#101636] w-fit ">
              <Wallet size={32} className="text-[#5964f6]" />
            </div>
            <h3 className="text-white text-xl">
              Connect Your Wallet & Create Your Profile
            </h3>
            <p className="text-sm text-white/30">
              Join the EduQuid platform with a simple and quick registration
              process. Set up your profile effortlessly, and connect your crypto
              wallet to unlock a secure and seamless way to receive your
              rewards.{" "}
            </p>
          </div>

          <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
            <div className="rounded-full p-4 bg-[#101636] w-fit ">
              <MousePointerClick size={32} className="text-[#5964f6]" />
            </div>
            <h3 className="text-white text-xl">Choose a Quiz</h3>
            <p className="text-sm text-white/30">
              Explore a wide range of topics and difficulty levels designed to
              match your interests and challenge your skills. Choose quizzes
              that engage your curiosity, test your knowledge, and make learning
              both fun and rewarding.
            </p>
          </div>

          <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
            <div className="rounded-full p-4 bg-[#101636] w-fit ">
              <BadgeDollarSign size={32} className="text-[#5964f6]" />
            </div>
            <h3 className="text-white text-xl">Play & Earn</h3>
            <p className="text-sm text-white/30">
              Answer engaging questions and track your progress in real-time as
              you work through each quiz. Your performance directly impacts your
              rewards—the better your score, the more tokens you earn, making
              every correct answer even more satisfying!
            </p>
          </div>

          <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
            <div className="rounded-full p-4 bg-[#101636] w-fit ">
              <Droplets size={32} className="text-[#5964f6]" />
            </div>
            <h3 className="text-white text-xl">Rewards via Liquidity Pool</h3>
            <p className="text-sm text-white/30">
              Your tokens are distributed instantly through our
              blockchain-powered liquidity pool, ensuring secure and transparent
              transactions. Redeem your earned tokens for exciting prizes or
              save them for future opportunities to maximize your rewards!
            </p>
          </div>

          <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
            <div className="rounded-full p-4 bg-[#101636] w-fit ">
              <Pickaxe size={32} className="text-[#5964f6]" />
            </div>
            <h3 className="text-white text-xl">Keep Learning & Winning</h3>
            <p className="text-sm text-white/30">
              Keep coming back for daily challenges, exciting leaderboard
              competitions, and even more opportunities to earn. With every quiz
              you take, watch your knowledge expand and your rewards grow,
              making each visit to EduQuid more rewarding than the last!
            </p>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative grid place-items-center bg-[#101636] py-16 shadow-inner-shadow border-t border-b border-[#9ea3bf40]"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#060a1e] to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#060a1e] to-transparent pointer-events-none"></div>
        <div className="container-fluid py-8 text-center flex flex-col items-center relative z-10">
          <h2 className="text-white text-6xl font-medium">Ready to Dive In?</h2>
          <p className="text-white/30 text-lg">
            Join EduQuid today and start your journey towards a smarter and more
            rewarding future!
          </p>

          <PulsatingButton pulseColor="#5964f6" className="px-12 py-4 mt-8">
            Get Started Now!
          </PulsatingButton>
        </div>
      </section>

      <section id="features" className="container-fluid py-8 my-8">
        <div className=" space-y-6 text-center">
          <h2 className="text-white text-6xl font-medium">
            Next-Level Learning with EduQuid Cutting-Edge Features
          </h2>

          <p className="text-md text-white/30 max-w-[768px] mx-auto">
            Explore revolutionary features that seamlessly combine education and
            rewards, creating an engaging and enjoyable learning experience like
            never before.
          </p>

          <div className=" md:grid md:grid-cols-3 md:gap-16 md:pt-16 md:pb-16  space-y-10 pt-16 pb-16">
            {/* Sol kısım */}
            <div className="shadow-inner-shadow p-6 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4 z-0">
              <div className="rounded-full p-4 bg-[#101636] w-fit">
                <Rocket size={32} className="text-[#5964f6]" />
              </div>
              <h2 className="text-white text-xl">Fast & Effortless</h2>
              <p className="text-sm text-white/30">
                Say goodbye to complicated setups! Create or join quizzes
                seamlessly, and experience instant results – all powered by
                cutting-edge blockchain technology.
              </p>
            </div>

            {/* Orta kısım - Daha büyük, ön planda */}
            <div className="shadow-inner-shadow p-10 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4 md:transform md:scale-125 z-10">
              <div className="rounded-full p-4 bg-[#101636] w-fit">
                <Gift size={32} className="text-[#5964f6]" />
              </div>
              <h2 className="text-white text-xl">Fair Rewards</h2>
              <p className="text-sm text-white/30">
                Ensure trust and fairness with automated prize distribution
                directly to participants’ wallets. Every winner gets their share
                instantly and securely.
              </p>
            </div>

            {/* Sağ kısım */}
            <div className="shadow-inner-shadow p-6 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4 z-0">
              <div className="rounded-full p-4 bg-[#101636] w-fit">
                <Shield size={32} className="text-[#5964f6]" />
              </div>
              <h2 className="text-white text-xl">Secure & Transparent</h2>
              <p className="text-sm text-white/30">
                Built on blockchain, every transaction and quiz result is
                tamper-proof and transparent. Your events are safe with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
