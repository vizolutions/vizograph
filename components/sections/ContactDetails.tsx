import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact, site } from "@/lib/content";
import { tile } from "@/lib/styles";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.address.join(", "),
)}`;

const label = "text-sm font-medium tracking-wider uppercase";

export function ContactDetails() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow={contact.eyebrow}
        title={contact.heading}
        subtitle={contact.subheading}
        className="mb-14"
      />

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Email */}
        <div
          className={tile("dark", "flex flex-col justify-between gap-10 p-8 lg:col-span-3 lg:p-12")}
        >
          <div>
            <IconTile icon={Mail} />
            <p className={`${label} mt-8 text-white/60`}>{contact.emailLabel}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-display text-3xl font-medium break-all transition-colors hover:text-accent-soft sm:text-5xl"
            >
              {site.email}
            </a>
          </div>
          <Button href={`mailto:${site.email}`} size="lg" className="self-start">
            Send an email
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
        </div>

        {/* Address */}
        <div
          className={tile(
            "panel",
            "relative isolate flex flex-col justify-between gap-10 overflow-hidden p-8 lg:col-span-2 lg:p-10",
          )}
        >
          <Image
            src="/images/map.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="-z-10 object-cover opacity-10"
          />
          <div>
            <IconTile icon={MapPin} />
            <p className={`${label} mt-8 text-muted`}>{contact.addressLabel}</p>
            <address className="mt-3 font-display text-xl leading-snug font-medium not-italic sm:text-2xl">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <Button
            href={mapsUrl}
            variant="subtle"
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
