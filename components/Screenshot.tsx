import Image from "next/image";

export default function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full rounded-lg border border-[var(--border)]"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-[var(--muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}