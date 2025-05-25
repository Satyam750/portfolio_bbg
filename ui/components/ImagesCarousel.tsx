"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

type ImagesCarouselProps = {
  items: {
    id: string;
    imageSrc: string;
    label: string;
    url:string
  }[];
};

export function ImagesCarousel(props: ImagesCarouselProps) {
  const { items } = props;

  return (
    <section
      className="flex py-8 px-4 lg:px-16 gap-6 overflow-x-scroll w-screen relative snap-x snap-mandatory scroll-pl-4 lg:scroll-pl-8 xl:scroll-pl-16 carousel"
      dir="ltr"
    >
      {items.map((item) => (
        <Link
        href={item.url}
        target="_blank"
          key={item.id}
          className="bg-[#060CFF] h-[220px] min-w-[300px] md:h-[400px] md:min-w-[500px] lg:h-[600px] lg:min-w-[900px] snap-start rounded-lg overflow-hidden relative"
        >
          <picture>
          <Suspense fallback={<div className="loader"></div>}>
            <Image
              src={item.imageSrc}
              alt={item.label}
              width={900}
              height={600}
              priority
              sizes="(min-width: 1024px) 900px, 300px"
              className="w-full h-full object-contain"
            />
              </Suspense>
          </picture>
        </Link>
      ))}
    </section>
  );
}
