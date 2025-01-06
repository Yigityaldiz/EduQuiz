export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="text-center"
    >
       <div className="relative">
        <img
          src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg?scale-down-to=1024"
          className="absolute h-[200px] w-full -mb-24 bottom-0 left-0 rotate-180"
        />
      </div>
      <div className="container-fluid pt-16 -mt-16 pb-8">
        <h3 className="text-white/50 font-medium pb-4 text-lg">
          Trusted By Top Organizations
        </h3>
        <div className="overflow-hidden flex flex-col items-center md:flex-row justify-center space-y-4 md:space-x-16 lg:space-y-0">
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
      </div>
    </section>
  );
}
