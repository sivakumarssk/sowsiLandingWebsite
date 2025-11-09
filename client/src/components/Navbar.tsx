import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";

type NavChildLink = {
  href: string;
  label: string;
  badge?: string;
};

type NavLinkItem = {
  href: string;
  label: string;
  children?: NavChildLink[];
};

const Navbar = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const serviceLinks: NavChildLink[] = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/mobile-development", label: "Mobile Development" },
    { href: "/services/iot-solutions", label: "IoT Solutions" },
    { href: "/services/ai-data", label: "AI & Data" },
    { href: "/services/cloud-devops", label: "Cloud & DevOps" },
    { href: "/services/consulting-strategy", label: "Consulting & Strategy" },
    { href: "/services/invoice-inventory-suite", label: "Invoice & Inventory Suite" }
  ];

  const productLinks: NavChildLink[] = [
    { href: "/products/invoice-inventory-suite", label: "Invoice & Inventory Suite", badge: "Beta" },
    { href: "/products/sowsi-meet", label: "Sowsi Meet", badge: "Coming Soon" }
  ];

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", children: serviceLinks },
    { href: "/products", label: "Products", children: productLinks },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" }
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const isActivePath = (href: string) =>
    location === href || location.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Sowsi</span>
              <span className="text-2xl font-medium text-[#1E293B]">Technologies</span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => {
                    if (link.children) {
                      const isActive = isActivePath(link.href);
                      return (
                        <div key={link.label} className="space-y-2">
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className={`block text-base font-semibold ${
                              isActive
                                ? "text-primary"
                                : "text-[#1E293B] hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                          <div className="ml-4 space-y-2 border-l border-slate-200 pl-4">
                            <Link
                              href={link.href}
                              onClick={closeMenu}
                              className="block text-sm font-medium text-[#1E293B] hover:text-primary"
                            >
                              Overview
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={closeMenu}
                                className={`flex items-center justify-between text-sm ${
                                  isActivePath(child.href)
                                    ? "text-primary font-medium"
                                    : "text-gray-600 hover:text-primary"
                                }`}
                              >
                                <span>{child.label}</span>
                                {"badge" in child && child.badge && (
                                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                                    {child.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={`text-base font-medium ${
                          location === link.href
                            ? "text-primary"
                            : "text-[#1E293B] hover:text-primary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link href="/contact" onClick={closeMenu}>
                    <Button className="w-full mt-4">Get Started</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.children) {
                const isActive = isActivePath(link.href);
                return (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`flex items-center gap-1 px-0 text-base font-medium hover:bg-transparent ${
                          isActive ? "text-primary" : "text-[#1E293B] hover:text-primary"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-[240px]">
                      <DropdownMenuItem asChild>
                        <Link href={link.href} className="font-semibold text-[#1E293B] hover:text-primary">
                          Overview
                        </Link>
                      </DropdownMenuItem>
                      <div className="my-2 h-px bg-slate-100" />
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link
                            href={child.href}
                            className={`flex items-center justify-between text-sm ${
                              isActivePath(child.href) ? "text-primary" : "text-[#1E293B]"
                            }`}
                          >
                            <span>{child.label}</span>
                            {"badge" in child && child.badge && (
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                                {child.badge}
                              </span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium ${
                    location === link.href
                      ? "text-primary"
                      : "text-[#1E293B] hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact">
              <Button className="ml-8 whitespace-nowrap">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
