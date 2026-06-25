"use client";

import { useState } from "react";
import Image from "next/image";
import type { VentureMediaItem } from "@/data/site";

type VenturePortfolioProps = {
  ventureName: string;
  slug: string;
  media: VentureMediaItem[];
};

function MediaTile({ item }: { item: VentureMediaItem }) {
  if (item.type === "video") {
    const isEmbed =
      item.src.includes("youtube.com") || item.src.includes("youtu.be");

    return (
      <figure className="overflow-hidden rounded-xl border border-border bg-surface-alt">
        <div className="relative aspect-video bg-deep">
          {isEmbed ? (
            <iframe
              src={item.src}
              title={item.caption ?? item.alt ?? "Project video"}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={item.src}
              controls
              className="absolute inset-0 h-full w-full object-cover"
              preload="metadata"
            >
              <track kind="captions" />
            </video>
          )}
        </div>
        {item.caption && (
          <figcaption className="px-4 py-3 text-sm text-ink-muted">
            {item.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface-alt">
      <div className="relative aspect-[4/3]">
        <Image
          src={item.src}
          alt={item.alt ?? item.caption ?? "Project photo"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {item.caption && (
        <figcaption className="px-4 py-3 text-sm text-ink-muted">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

function PlaceholderSlot({
  type,
  index,
  slug,
}: {
  type: "image" | "video";
  index: number;
  slug: string;
}) {
  const label = type === "image" ? "Photo" : "Video";

  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-cream/50 p-6 text-center">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-lg text-accent">
        {type === "image" ? "📷" : "▶"}
      </span>
      <p className="mt-3 text-sm font-medium text-ink">{label} slot {index}</p>
      <p className="mt-1 text-xs text-ink-muted">
        public/media/{slug}/
      </p>
    </div>
  );
}

export function VenturePortfolio({
  ventureName,
  slug,
  media,
}: VenturePortfolioProps) {
  const [open, setOpen] = useState(false);
  const hasMedia = media.length > 0;
  const imageCount = media.filter((m) => m.type === "image").length;
  const videoCount = media.filter((m) => m.type === "video").length;

  return (
    <div className="border-t border-border bg-surface-alt/60 px-8 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Our work</p>
          <p className="mt-1 text-sm text-ink-muted">
            Photos and videos from {ventureName}
            {hasMedia && (
              <span className="text-ink-muted">
                {" "}
                — {imageCount} photo{imageCount !== 1 ? "s" : ""}
                {videoCount > 0 &&
                  `, ${videoCount} video${videoCount !== 1 ? "s" : ""}`}
              </span>
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="btn-ghost shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          aria-expanded={open}
        >
          {open ? "Hide photos & videos" : "View photos & videos"}
        </button>
      </div>

      {open && (
        <div className="mt-6">
          {hasMedia ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {media.map((item, i) => (
                <MediaTile key={`${item.src}-${i}`} item={item} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <PlaceholderSlot type="image" index={1} slug={slug} />
              <PlaceholderSlot type="image" index={2} slug={slug} />
              <PlaceholderSlot type="video" index={1} slug={slug} />
            </div>
          )}

          {!hasMedia && (
            <p className="mt-4 text-center text-xs text-ink-muted">
              Portfolio coming soon — project photos and team videos will appear
              here.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
