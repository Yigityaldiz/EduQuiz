import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import BlurIn from "@/components/ui/blur-in";
import PulsatingButton from "@/components/ui/pulsating-button";
import { cn } from "@/lib/utils";

import Grow from "@/components/ui/grow";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative -top-16 grid place-items-center overflow-hidden bg-transparent w-full"
    >
      <div className="mt-44 md:mt-56 mb-12 md:mb-24 z-10 container-fluid grid place-items-center px-4 md:px-0">
        <div className="z-10 flex items-center justify-center mb-8">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Eduquiz</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <BlurIn
          word="Unlock Knowledge, Earn Rewards"
          className="text-4xl md:text-[86px] max-w-[960px] pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-blue-300 to-gray-100 bg-clip-text text-center font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10"
        />

        <BlurIn
          word="Eduquiz combines the power of blockchain with interactive quizzes to create a rewarding learning experience. Test your knowledge, compete, and earn tokens—it's education like never before."
          className="text-md text-center font-normal md:text-md max-w-[768px] pointer-events-none text-white/50  leading-normal dark:from-white dark:to-slate-900/10"
        />

        <PulsatingButton pulseColor="#5964f6" className="px-12 py-4 mt-8">
          Get Started Now!
        </PulsatingButton>
      </div>

      <Grow
        className="rounded-2xl w-[90%] md:w-3/4 lg:w-1/2 px-0 h-auto relative z-10"
        duration={0.75}
      >
        <img
          src="/assets/images/eduquiz-hero.png"
          alt="hero"
          className="rounded-2xl w-full "
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
  );
}
