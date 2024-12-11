import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={`/`}
      className="text-2xl font-black  h-16 px-2 gap-1 flex items-center"
    >
      <span>
        <IconBrandReact size={25} stroke={1} />
      </span>
      <span>React</span>
    </Link>
  );
}
