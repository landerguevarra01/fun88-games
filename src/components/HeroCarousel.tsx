import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

type Slide = {
  href: string;
  img: string;
  alt: string;
};

const slides: Slide[] = [
  {
    href: "/promotions/376-programa-vip-de-fun88",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Vip_2400x500.webp",
    alt: "Programa VIP de FUN88",
  },
  {
    href: "/promotions/342-casino-inicio-bonos-100",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/Bono_180_2400x500.webp",
    alt: "Casino Inicio Bonos 100%",
  },
  {
    href: "/promotions/356-bono-referencia",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/Bono_Referidos_2400x500.webp",
    alt: "Bono Referencia",
  },
  {
    href: "/promotions/332-primer-bono-diario-25",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/Bono_25_2400x500.webp",
    alt: "Primer Bono Diario 25%",
  },
  {
    href: "/promotions/324-10-bono-ilimitado",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/Bono_10_2400x500.webp",
    alt: "10% Bono Ilimitado",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  // Optional auto-scroll
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full px-4 xl:px-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.href}
              className="flex-[0_0_100%] aspect-[3/1] xl:aspect-[5/1]"
            >
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover rounded-[15px] xl:rounded-[25px]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
