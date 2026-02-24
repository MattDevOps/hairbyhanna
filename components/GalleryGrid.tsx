import Image from "next/image";
import gallery from "@/public/images/gallery.json";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">

      {gallery.map((img, i) => (
        <div key={i} className="relative h-96 overflow-hidden rounded-lg">

          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />

        </div>
      ))}

    </div>
  );
}