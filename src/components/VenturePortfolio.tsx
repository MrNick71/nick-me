"use client";

import { useState } from "react";
import type { VentureMediaCategory, VentureMediaItem } from "@/data/site";

type VenturePortfolioProps = {
  ventureName: string;
  slug: string;
  media: VentureMediaItem[];
  mediaCategories?: VentureMediaCategory[];
};

function MediaTile({ item }: { item: VentureMediaItem }) {
  if (item.type === "video") {
    const isEmbed =
      item.src.includes("youtube.com") || item.src.includes("youtu.be");

    return (
      <figure className="overflow-hidden rounded-xl border border-border bg-surface">
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
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt ?? item.caption ?? "Project photo"}
          className="h-full w-full object-cover"
          loading="lazy"
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
  folder,
}: {
  type: "image" | "video";
  folder: string;
}) {
  return (
    <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-cream/50 p-4 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-base text-accent">
        {type === "image" ? "📷" : "▶"}
      </span>
      <p className="mt-2 text-xs font-medium text-ink">
        {type === "image" ? "Photo" : "Video"} coming soon
      </p>
      <p className="mt-1 break-all text-[10px] text-ink-muted">{folder}</p>
    </div>
  );
}

function MediaGrid({
  items,
  slug,
  categoryId,
}: {
  items: VentureMediaItem[];
  slug: string;
  categoryId?: string;
}) {
  const folder = categoryId
    ? `public/media/${slug}/${categoryId}/`
    : `public/media/${slug}/`;

  if (items.length > 0) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <MediaTile key={`${item.src}-${i}`} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PlaceholderSlot type="image" folder={folder} />
      <PlaceholderSlot type="image" folder={folder} />
      <PlaceholderSlot type="video" folder={folder} />
    </div>
  );
}

function countMedia(items: VentureMediaItem[]) {
  return {
    images: items.filter((m) => m.type === "image").length,
    videos: items.filter((m) => m.type === "video").length,
  };
}

export function VenturePortfolio({
  ventureName,
  slug,
  media,
  mediaCategories,
}: VenturePortfolioProps) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    mediaCategories?.[0]?.id ?? "all",
  );

  const isCatalog = Boolean(mediaCategories?.length);
  const allCatalogMedia =
    mediaCategories?.flatMap((category) => category.media) ?? [];
  const flatMedia = isCatalog ? allCatalogMedia : media;
  const { images, videos } = countMedia(flatMedia);
  const hasMedia = flatMedia.length > 0;

  const activeGroup = isCatalog
    ? mediaCategories?.find((c) => c.id === activeCategory)
    : null;

  return (
    <div className="border-t border-border bg-surface-alt/60 px-8 py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Our work</p>
          <p className="mt-1 text-sm text-ink-muted">
            {isCatalog
              ? `Catalogue — ${mediaCategories?.length} categories from ${ventureName}`
              : `Photos and videos from ${ventureName}`}
            {hasMedia && (
              <span>
                {" "}
                — {images} photo{images !== 1 ? "s" : ""}
                {videos > 0 && `, ${videos} video${videos !== 1 ? "s" : ""}`}
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
          {isCatalog ? (
            <>
              <div className="flex flex-wrap gap-2">
                {mediaCategories?.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      activeCategory === category.id
                        ? "bg-accent text-white"
                        : "border border-border bg-surface text-ink-muted hover:border-accent hover:text-ink"
                    }`}
                  >
                    {category.name}
                    {category.media.length > 0 && (
                      <span className="ml-1.5 opacity-80">
                        ({category.media.length})
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {activeGroup && (
                <div className="mt-6">
                  <h4 className="font-serif text-lg font-semibold text-ink">
                    {activeGroup.name}
                  </h4>
                  <p className="mt-1 text-xs text-ink-muted">
                    Add files to{" "}
                    <code className="rounded bg-cream px-1.5 py-0.5">
                      public/media/{slug}/{activeGroup.id}/
                    </code>
                  </p>
                  <div className="mt-4">
                    <MediaGrid
                      items={activeGroup.media}
                      slug={slug}
                      categoryId={activeGroup.id}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <MediaGrid items={media} slug={slug} />
          )}

          {!hasMedia && (
            <p className="mt-4 text-center text-xs text-ink-muted">
              {isCatalog
                ? "Portfolio coming soon — add photos and videos to each category folder."
                : "Portfolio coming soon — project photos and team videos will appear here."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
