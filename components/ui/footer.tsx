import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`flex flex-col items-center justify-center gap-6 py-8 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* Logo and copyright */}
          <div className="space-y-2 text-center">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; The Shadow Manager - All rights reserved.
            </div>
          </div>

          {/* You can uncomment and customize these sections as needed */}
          {/* Social links could go here */}
        </div>
      </div>
    </footer>
  );
}
