import type { Game } from "../types/Game";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

interface FavoritesModalProps {
  open: boolean;
  onClose: () => void;
  favorites: Set<string>;
  games: Game[];
  onToggleFavorite?: (id: string) => void;
}


const slides = [
  {
    href: "https://www.fun88.mx/promotions/364-gana-hasta-500",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/photo_2025-10-13_14-21-42.jpg",
    alt: "Banner 1",
  },
  {
    href: "https://www.fun88.mx/promotions/364-gana-hasta-500",
    img: "https://f1m9.blob.core.windows.net/f1m9/banner/banner.jpg",
    alt: "Banner 2",
  },
];

export default function FavoritesModal({ open, onClose }: FavoritesModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[205] flex items-center justify-center bg-black/50 p-3"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F2F2FA] w-full max-w-[400px] xs:max-w-[calc(100%-32px)] rounded-[10px] overflow-y-auto overflow-x-hidden max-h-[calc(100vh-32px)] !pt-5 !pb-[15px] !px-3 xs:!px-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-end -mt-5 mb-3 xs:mb-5 -mx-5 px-5 py-0 rounded-t-[10px] bg-primary">
          <button className="text-xs xs:text-sm text-highlight px-0 py-2.5 text-[#00A6FF]">
            REGÍSTRATE
          </button>
        </div>

        {/* Carousel */}
        <section className="w-full px-4 xl:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {slides.map((slide, index) => (
                <a
                  key={index}
                  href={slide.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-[0_0_100%] aspect-[3/1]"
                >
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <form className="bg-[#F2F2FA] mt-4">
          {/* Username */}
          <div className="w-full mb-2">
            <label
              className="uppercase text-secondary-txt block mb-1 text-xs xs:text-sm xl:text-base"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <div className="bg-white flex items-center relative px-3 py-0 rounded-md h-8 xs:h-9 xl:h-[38px]">
              <input
                className="placeholder-secondary-txt text-txt flex-1 mr-3 text-xs xs:text-sm xl:text-base"
                name="username"
                placeholder="Eg:Raul678"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full mb-2">
            <label
              className="uppercase text-secondary-txt block mb-1 text-xs xs:text-sm xl:text-base"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="bg-white flex items-center relative px-3 py-0 rounded-md h-8 xs:h-9 xl:h-[38px]">
              <input
                className="placeholder-secondary-txt text-txt flex-1 mr-3 text-xs xs:text-sm xl:text-base"
                type="password"
                name="password"
              />
              <button type="button" className="flx-ctr">
                <svg
                  width="15"
                  height="14"
                  fill="#fff"
                  className="fill-secondary-txt"
                  aria-label="Hide Password"
                >
                  <use href="/sprite.svg?v=133#eye-slash-2"></use>
                </svg>
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label className="relative text-secondary-txt text-xs xs:text-sm inline-block mb-2 xs:mb-4 pl-5">
            Recuérdame
            <input className="hidden" type="checkbox" />
            <span className="bg-white inline-block w-3.5 h-3.5 bg-primary absolute -translate-y-2/4 rounded transition-all left-0 top-2/4 after:content-[''] after:absolute after:bg-primary-btn-bg after:w-2 after:h-2 after:rounded after:left-[3px] after:top-[3px] after:opacity-0"></span>
          </label>

          {/* Login button */}
          <div className="flx-ctr mb-2">
            <button
              className="block text-center bg-[#00A6FF] text-white cursor-pointer uppercase text-xs xs:text-sm w-full px-6 py-2 xs:py-3 rounded-md disabled:bg-[#657f8c] xl:text-base"
              type="submit"
            >
              Acceder
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full mt-2 xs:mt-3">
            <div className="flex-1 h-px bg-gray-500"></div>
            <span className="px-2 text-xs text-secondary-txt">Ó</span>
            <div className="flex-1 h-px bg-gray-500"></div>
          </div>

          {/* Apple login */}
          <div className="mt-2 xs:mt-3 mb-3">
            <button
              className="w-full text-center relative border text-xs xs:text-sm text-[#00A6FF] px-0 py-2 rounded-md border-solid border-[#00A6FF] disabled:opacity-70 last:mb-0 [&>svg]:absolute [&>svg]:-translate-y-2/4 [&>svg]:left-2.5 [&>svg]:top-2/4"
              type="button"
            >
              <svg className="absolute -translate-y-2/4 w-[15px] h-[15px] xs:w-[19px] xs:h-[19px] left-2.5 top-2/4 text-[unset]">
                <use href="/sprite.svg?v=133#apple"></use>
              </svg>
              Ingresa con Apple
            </button>
          </div>

          <p className="text-[#00A6FF] cursor-pointer underline text-xs xs:text-sm text-center mt-3 xs:mt-4 xs:mb-[5px]">
            ¿Contraseña Olvidada?
          </p>
        </form>
      </div>
    </div>
  );
}
