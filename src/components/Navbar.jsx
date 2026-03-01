"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Academics", href: "#academics" },
    { name: "Gallery", href: "/gallery", isRoute: true },
    { name: "Faculty", href: "/faculty", isRoute: true },
    { name: "Career", href: "/career", isRoute: true },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
    { name: "Portal", href: "https://Tissangli.in", external: true },
  ];

  const handleClick = (e, href, external, isRoute) => {
    if (external || isRoute) {
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex flex-col py-2 flex-1 min-w-0">
          <Link href="/" className="flex items-center">
            <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-primary leading-tight truncate">
              Takshashila International School
            </span>
          </Link>
          <span className="text-[8px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5 truncate">
            Nurturing Minds, Shaping Futures
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1 xl:gap-6 items-center ml-8">
          {navLinks.map((link) => {
            if (link.isRoute) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium transition-colors hover:text-primary py-2 px-2 xl:px-0 whitespace-nowrap cursor-pointer"
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) =>
                  handleClick(e, link.href, link.external, link.isRoute)
                }
                className="text-xs xl:text-sm font-medium transition-colors hover:text-primary py-2 px-2 xl:px-0 whitespace-nowrap cursor-pointer"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden flex-shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 -mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[320px] bg-white p-0"
            >
              <div className="flex flex-col space-y-2 mt-20 px-4 sm:px-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    {link.isRoute ? (
                      <Link
                        href={link.href}
                        className="text-base sm:text-lg font-medium text-gray-900 hover:text-primary py-3 px-4 rounded-lg hover:bg-secondary/50 transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) =>
                          handleClick(e, link.href, link.external, link.isRoute)
                        }
                        className="text-base sm:text-lg font-medium text-gray-900 hover:text-primary py-3 px-4 rounded-lg hover:bg-secondary/50 transition-colors border-b border-gray-100 last:border-b-0 cursor-pointer"
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {link.name}
                      </a>
                    )}
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
