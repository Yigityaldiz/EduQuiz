import { Wallet } from "lucide-react";
import {
  MousePointerClick,
  BadgeDollarSign,
  Droplets,
  Pickaxe,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container-fluid py-8 text-center grid md:grid-cols-2 gap-8 scroll-mt-20"
    >
      <div className="relative h-full">
        <div className="sticky top-1/3 left-0">
          <h2 className="text-white text-5xl md:text-7xl font-medium text-left">
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
            wallet to unlock a secure and seamless way to receive your rewards.{" "}
          </p>
        </div>

        <div className="shadow-inner-shadow p-8 border border-[#9ea3bf40] rounded-2xl grid place-items-center space-y-4">
          <div className="rounded-full p-4 bg-[#101636] w-fit ">
            <MousePointerClick size={32} className="text-[#5964f6]" />
          </div>
          <h3 className="text-white text-xl">Choose a Quiz</h3>
          <p className="text-sm text-white/30">
            Explore a wide range of topics and difficulty levels designed to
            match your interests and challenge your skills. Choose quizzes that
            engage your curiosity, test your knowledge, and make learning both
            fun and rewarding.
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
            Your tokens are distributed instantly through our blockchain-powered
            liquidity pool, ensuring secure and transparent transactions. Redeem
            your earned tokens for exciting prizes or save them for future
            opportunities to maximize your rewards!
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
            you take, watch your knowledge expand and your rewards grow, making
            each visit to EduQuid more rewarding than the last!
          </p>
        </div>
      </div>
    </section>
  );
}
