import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/lib/content";
import { eyebrow, tile } from "@/lib/styles";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.address.join(", "),
)}`;

export function ContactDetails() {
  return (
    <Section id="contact">
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Email */}
        <div
          className={tile(
            "glass",
            "relative isolate flex flex-col justify-between gap-10 overflow-hidden p-8 lg:col-span-3 lg:p-12",
          )}
        >
          <div
            aria-hidden
            className="absolute -top-24 -left-10 size-72 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative">
            <span className="grid size-12 place-items-center rounded-2xl bg-ink/[0.05] text-accent-ink ring-1 ring-ink/10">
              <Mail className="size-5" aria-hidden />
            </span>
            <p className={`${eyebrow} mt-8 text-muted`}>{contact.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-display text-3xl font-semibold break-all transition-colors hover:text-accent-ink sm:text-5xl"
            >
              {site.email}
            </a>
          </div>
          <Button href={`mailto:${site.email}`} size="lg" className="relative self-start">
            Send an email
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
        </div>

        {/* Address */}
        <div
          className={tile(
            "glass",
            "relative isolate flex flex-col justify-between gap-10 overflow-hidden p-8 lg:col-span-2 lg:p-10",
          )}
        >
          <Image
            src="/images/map.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="-z-10 object-cover opacity-[0.12]"
          />
          <div>
            <span className="grid size-12 place-items-center rounded-2xl bg-ink/[0.05] text-amber-ink ring-1 ring-ink/10">
              <MapPin className="size-5" aria-hidden />
            </span>
            <p className={`${eyebrow} mt-8 text-muted`}>{contact.addressLabel}</p>
            <address className="mt-3 font-display text-xl leading-snug font-semibold not-italic sm:text-2xl">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <Button
            href={mapsUrl}
            variant="glass"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            Open in Google Maps
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>
    </Section>
  );
}
