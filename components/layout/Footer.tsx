import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { contact, navLinks, projects, site } from "@/lib/content";
import { pageGutter } from "@/lib/styles";

const columnHeading = "font-pixel text-xs tracking-wider text-accent-ink uppercase";
const columnLink = "text-sm text-muted transition-colors hover:text-ink";

export function Footer() {
  // Evaluated when the site is built, so it stays current on every deploy.
  const year = new Date().getFullYear();

  return (
    <footer className={`${pageGutter} pt-16 pb-8`}>
      <Container>
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home">
              <Image
                src="/images/logo/vizograph-logo-with-text.png"
                alt="Vizograph"
                width={617}
                height={153}
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-muted">{site.tagline}</p>
          </div>

          <nav aria-label="Sections">
            <h2 className={columnHeading}>Sections</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={columnLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Projects">
            <h2 className={columnHeading}>Projects</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {projects.items.map((project) => {
                const href = project.external ?? project.link;
                return (
                  <li key={project.slug}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={columnLink}
                      >
                        {project.name}
                      </a>
                    ) : (
                      <a href="#work" className={columnLink}>
                        {project.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h2 className={columnHeading}>Contact</h2>
            <a href={`mailto:${site.email}`} className={`${columnLink} mt-5 block`}>
              {site.email}
            </a>
            <address className="mt-4 text-sm leading-relaxed text-muted not-italic">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-center text-sm text-muted">
            Copyright &copy; {site.name} {site.foundedYear}&ndash;{year}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-panel"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </Container>
    </footer>
  );
}
