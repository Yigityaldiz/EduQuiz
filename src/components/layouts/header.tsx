/**
 * Aşağıdaki kod, tailwind kullanarak daha iyi bir responsive tasarım sağlaması amacıyla yeniden düzenlenmiştir.
 * Menü öğeleri ve hamburger simgesi, mobil cihazlarda görünür olacak şekilde ayarlanmıştır.
 * Masaüstü cihazlarda ise varsayılan yatay navigasyon görünümü korunmuştur.
 */

// Start of Selection
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import ConnectWalletButton from "../connect-wallet";

export default function Header() {
  return (
    <header className="flex items-center border border-[#9ea3bf40] z-20 w-[95%] fixed backdrop-blur-xl bg-[#060a1e]/50 left-1/2 top-2 rounded-full -translate-x-1/2 container-fluid justify-between px-4 md:px-8 py-2 md:py-3">
      <div className="flex items-center">
        <img
          src="/assets/images/logos/eduquiz-white.png"
          alt="Eduquiz"
          className="h-10 md:h-12 w-auto pointer-events-none"
        />
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white/50">
          <li>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works?
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobil Menü */}
      <div className="md:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col items-end space-y-1">
            <div className="h-[2px] w-6 bg-white"></div>
            <div className="h-[2px] w-6 bg-white"></div>
            <div className="h-[2px] w-6 bg-white"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#060a1e] w-48 z-50 p-3 text-white border border-gray-600 rounded-md mt-2">
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 rounded px-2 py-1">
              <a href="#how-it-works">How It Works?</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 rounded px-2 py-1">
              <a href="#features">Features</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Cüzdan Butonu */}
      <ConnectWalletButton />
    </header>
  );
}
