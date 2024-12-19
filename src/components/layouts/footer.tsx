export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="container-fluid">
        <div className="flex justify-between">
          <div className="flex items-center space-x-8">
            <img
              src="/assets/images/logos/eduquiz-white.png"
              width={180}
              height={75}
              alt="Eduquid Logo"
            />

            <div className="h-6 w-[1px] bg-white"></div>

            <p className="text-white/50">
              Innovative and secure <br />
              educational experience.
            </p>
          </div>

          <nav>
            <ul className="flex justify-center space-x-8 py-8 text-white/30">
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
        </div>

        <div className="w-full h-[1px] bg-white/20 mt-8"></div>

        <div className="flex justify-between py-12  ">
          <p className="text-white/30">© 2024 Eduquid. All rights reserved.</p>

          <div className="flex space-x-8 text-white/30">
            <a href="/" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full bottom-[180%] left-0">
        <img
          src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg?scale-down-to=1024"
          className="w-full"
        />
      </div>
    </footer>
  );
}
