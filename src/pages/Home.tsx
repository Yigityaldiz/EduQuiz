import Header from "@/components/layouts/header";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurIn from "@/components/ui/blur-in";
import { BorderBeam } from "@/components/ui/border-beam";
import Grow from "@/components/ui/grow";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import * as React from "react";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <section id="hero" className="grid place-items-center h-[100dvh] overflow-y-hidden">
        <div className="mt-28 mb-24">
          <div className="z-10 flex items-center justify-center">
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
            className="text-4xl max-w-[768px] pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-blue-300 to-gray-100 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
          />

          <BlurIn
            word="EduQuid combines the power of blockchain with interactive quizzes to create a rewarding learning experience. Test your knowledge, compete, and earn tokens—it's education like never before."
            className="text-md font-normal md:text-md max-w-[768px] pointer-events-none text-white/30 text-center leading-normal dark:from-white dark:to-slate-900/10"
          />
        </div>

        <Grow className="rounded-2xl w-3/4 h-auto relative" duration={0.75}>
          <img
            src="https://framerusercontent.com/images/JSakO3iDpBY0uvb9cOV7x278fQM.png?scale-down-to=1024"
            alt="hero"
            className="rounded-2xl object-cover w-full"
          />

          <BorderBeam />
        </Grow>
      </section>
    </React.Fragment>
  );
}

export default Home;
