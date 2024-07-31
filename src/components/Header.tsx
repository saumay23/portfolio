import Link from "next/link";
import { Button } from "./ui/button";
import NavBar from "./ui/NavBar";
import MobileNavbar from "./ui/MobileNavbar";

const Header =
  () => {
    return (
      <header className="py-8 xl:px-12 ">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href={
              "/"
            }
          >
            <h1 className="text-4xl font-semibold">
              Saumay
              <span className="text-accent">
                .
              </span>
            </h1>
          </Link>
          {/* Desktop Navbar */}

          <div className="hidden xl:flex gap-48 items-center">
            <NavBar />
            <Button>
              <Link href="/contact">
                Hire
                Me
              </Link>
            </Button>
          </div>
          {/* Mobile Navbar */}
          <div className="xl:hidden">
            <MobileNavbar />
          </div>
        </div>
      </header>
    );
  };

export default Header;
