import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-ink text-cream">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <p className="section-label text-accent">Contact</p>
              <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Let&apos;s connect
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">
                Whether you need a security system installed, branding designed, or want to discuss technology — I&apos;d love to hear from you.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-cream/90 transition-colors hover:text-cream"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-sm">
                    @
                  </span>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-cream/90 transition-colors hover:text-cream"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-sm">
                    #
                  </span>
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/90 transition-colors hover:text-cream"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-sm">
                    in
                  </span>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-cream/10 bg-accent/20 p-10 md:p-16 lg:border-l lg:border-t-0">
              <blockquote className="font-serif text-2xl leading-relaxed md:text-3xl">
                &ldquo;Elevate your brand, secure your space, and streamline your data with a trusted expert.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm text-cream/60">
                — Nicholas Kwaku Akakpo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
