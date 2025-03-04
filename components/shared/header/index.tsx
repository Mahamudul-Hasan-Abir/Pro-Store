import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

import Menu from "./menu";
const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between ">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              height={48}
              width={48}
              priority={true}
            ></Image>
            <span className="hidden font-bold text-2xl ml-3 lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
