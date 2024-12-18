import ShimmerButton from "../ui/shimmer-button";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <img
          src="/assets/images/logos/eduquiz-white.png"
          alt="Eduquiz"
          className="h-12 w-auto"
        />
      </div>

      <nav>
        <ul className="flex space-x-6 text-white/50">
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

      <ShimmerButton
        className="font-semibold border border-[#9ea3bf40]"
        shimmerColor="rgba(158, 163, 191, 0.25)"
        shimmerSize="0.2em"
      >
        Connect Wallet
      </ShimmerButton>
    </header>
  );
}
