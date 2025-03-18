import Link from "next/link";
import Image from "next/image";
import LogoSvg from "@/public/images/logo-01.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Color Manager">
      <Image src={LogoSvg} alt="Logo" width={28} height={28} />
    </Link>
  );
}
