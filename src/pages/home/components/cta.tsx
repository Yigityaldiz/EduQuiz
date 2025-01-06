import PulsatingButton from "@/components/ui/pulsating-button";

export default function CTA() {
  return (
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
  );
}
