"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Arts from "@/components/Arts";

interface GallerySectionProps {
  artworks: Array<{ imageUrl: string; title: string; description: string }>;
}

export default function GallerySection({ artworks }: GallerySectionProps) {
  console.log(artworks);
  return (
    <div
      className={`relative flex flex-col w-full items-center justify-center h-screen bg-neutral-950`}
    >
      <Carousel className="relative w-full h-auto">
        <CarouselContent className="flex items-center">
          {artworks.map((artwork, index) => {
            return (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <Arts
                  imageUrl={artwork.imageUrl}
                  title={artwork.title}
                  description={artwork.description}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-4 left-4 bg-gray-800 text-white p-2 rounded"></CarouselPrevious>
        <CarouselNext className="absolute bottom-4 right-4 bg-gray-800 text-white p-2 rounded"></CarouselNext>
      </Carousel>
    </div>
  );
}
