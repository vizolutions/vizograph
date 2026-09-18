"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navLinks, sections } from "@/lib/content";
import { pageGutter } from "@/lib/styles";

/** Watches which section is in the middle of the screen. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** True once the page has been scrolled past the given offset. */
function useScrolled(offset = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

const sectionIds = sections.map((section) => section.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => href === `#${active}`;

  return (
    <header className={cn(pageGutter, "fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4")}>
      <div
        className={cn(
          // Three columns on desktop so the nav pill stays centred.
          "mx-auto flex max-w-page items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-[background-color,box-shadow] duration-300 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-6",
          (scrolled || menuOpen) && "shadow-bar ring-1 ring-ink/10 glass",
        )}
      >
        <a href="#home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo/vizograph-logo-with-text.png"
            alt="Vizograph"
            width={617}
            height={153}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-ink/[0.04] p-1.5 ring-1 ring-ink/8 backdrop-blur-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-panel text-ink shadow-panel ring-1 ring-ink/10"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop call to action; replaced by the Menu button on smaller screens. */}
        <Button
          href="#contact"
          variant="contrast"
          className="hidden lg:inline-flex lg:justify-self-end"
        >
          Get in touch
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>

        <Button
          variant="glass"
          size="sm"
          className="lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
          {menuOpen ? (
            <X className="size-4" aria-hidden />
          ) : (
            <Menu className="size-4" aria-hidden />
          )}
        </Button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="mx-auto mt-2 max-w-page rounded-3xl p-3 shadow-menu ring-1 ring-ink/10 glass lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl font-semibold",
                    isActive(link.href)
                      ? "bg-ink/[0.06] text-ink"
                      : "text-muted hover:bg-ink/[0.04] hover:text-ink",
                  )}
                >
                  {link.label}
                  <ArrowUpRight className="size-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
