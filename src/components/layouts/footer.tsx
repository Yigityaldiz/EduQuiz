export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="container-fluid">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <img
              src="/assets/images/logos/eduquiz-white.png"
              width={180}
              height={75}
              alt="Eduquid Logo"
            />

            <div className="h-6 w-[1px] bg-white hidden md:block"></div>

            <p className="text-white/50 text-center md:text-left text-lg">
              Innovative and secure <br />
              educational experience.
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/20 mt-8 block md:hidden"></div>
          <nav>
            <ul className="flex flex-col md:flex-row py-4 md:justify-center items-center text-lg md:text-md text-center md:text-left md:space-x-8 md:py-8 text-white/30">
              <li>
                <a href="/" className="hover:text-white">
                  How It Works?
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Features
                </a>
              </li>
            </ul>
          </nav>

          <div className="w-full h-[1px] bg-white/20 block md:hidden"></div>

        </div>

        <div className="w-full h-[1px] bg-white/20 hidden md:block mt-0 md:mt-12"></div>

        <div className="flex flex-col text-center md:text-left md:flex-row justify-between space-y-2 md:space-y-0 py-12">
          <p className="text-white/30">© 2024 Eduquid. All rights reserved.</p>

          <div className="flex justify-center md:justify-end space-x-8 text-white/30">
            <a href="/" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg?scale-down-to=1024"
          className="absolute h-[300px] w-full -mb-44 bottom-0 left-0"
        />
      </div>
    </footer>
  );
}
