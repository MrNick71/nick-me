import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-deep text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-semibold">{siteConfig.shortName}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="section-label text-accent-glow">Connect</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cream/80 transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-cream/80 transition-colors hover:text-cream"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-cream"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label text-accent-glow">Location</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {siteConfig.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/50 md:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            <a href={siteConfig.url} className="hover:text-cream/80">
              {siteConfig.url.replace("https://", "")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
