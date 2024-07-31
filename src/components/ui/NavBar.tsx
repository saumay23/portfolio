"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar =
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
      ];
    const pathname =
      usePathname();

    return (
      <nav className="flex items-center gap-8">
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
                {
                  link.name
                }
              </Link>
            );
          }
        )}
      </nav>
    );
  };

export default NavBar;
