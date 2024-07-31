"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const MobileNavbar =
  () => {
    const links =
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Resume",
          path: "/resume",
        },
        {
          name: "Projects",
          path: "/project",
        },
        {
          name: "Hire Me",
          path: "/contact",
        },
      ];
    const pathname =
      usePathname();
    return (
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-primary" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="mt-32 mb-40 text-center text-2xl">
            <h1 className="text-4xl font-semibold">
              Saumay
              <span className="text-accent">
                .
              </span>
            </h1>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links?.map(
              (
                link,
                index
              ) => {
                return (
                  <Link
                    href={
                      link.path
                    }
                    key={
                      index
                    }
                    className={`${
                      pathname ===
                        link.path &&
                      "text-accent border-b-2 border-accent"
                    } capitalize font-medium transition-all hover:text-accent`}
                  >
                    <SheetClose>
                      {
                        link.name
                      }
                    </SheetClose>
                  </Link>
                );
              }
            )}
          </nav>
        </SheetContent>
      </Sheet>
    );
  };

export default MobileNavbar;
