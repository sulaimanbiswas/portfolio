import { ModeToggle } from "@/components/shared/ModeToggle/ModeToggle";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      <ModeToggle />
      <Link href="/about">About</Link>
    </div>
  );
}

export default Header;
