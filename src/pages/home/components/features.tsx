import { Rocket, Gift, Shield } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="container-fluid py-8 my-8 scroll-mt-20">
      <div className="space-y-6 text-center">
        <h2 className="text-white text-4xl md:text-6xl font-medium">
          Next-Level Learning with EduQuid Cutting-Edge Features
        </h2>

        <p className="text-md text-white/30 max-w-[768px] mx-auto">
          Explore revolutionary features that seamlessly combine education and
          rewards, creating an engaging and enjoyable learning experience like
          never before.
        </p>

        <div className=" md:grid md:grid-cols-3 md:gap-16 md:pt-16 md:pb-16 space-y-4 md:space-y-0 pt-4 pb-16">
          {/* Sol kısım */}
          <div className="shadow-inner-shadow p-6 border border-[#9ea3bf40] rounded-2xl flex flex-col justify-center space-y-4 items-center z-0">
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
          <div className="shadow-inner-shadow p-10 border border-[#9ea3bf40] rounded-2xl flex flex-col justify-evenly items-center space-y-4 md:transform md:scale-125 z-10">
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
          <div className="shadow-inner-shadow p-6 border border-[#9ea3bf40] rounded-2xl flex flex-col justify-center items-center space-y-4 z-0">
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
  );
}
