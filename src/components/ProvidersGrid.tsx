// components/ProvidersGrid.tsx
import { useEffect, useRef, useState } from "react";
import type { Provider } from "../types/Providers";

interface Props {
  providers: Provider[];
  selectedProvider: string | null;
  onSelectProvider: (providerName: string | null) => void;
}

const VISIBLE_COUNT = 6;
const AUTO_SLIDE_DELAY = 2000;

export default function ProvidersGrid({
  providers,
  selectedProvider,
  onSelectProvider,
}: Props) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = [...providers, ...providers.slice(0, VISIBLE_COUNT)];
  const maxIndex = providers.length;

  // Auto slide
  useEffect(() => {
    if (providers.length <= VISIBLE_COUNT) return;

    const interval = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [providers.length]);

  // Reset index when reaching cloned items
  useEffect(() => {
    if (!trackRef.current) return;

    if (index >= maxIndex) {
      const track = trackRef.current;

      setTimeout(() => {
        track.style.transition = "none";
        setIndex(0);
        track.style.transform = "translateX(0%)";

        requestAnimationFrame(() => {
          track.style.transition = "transform 300ms ease-out";
        });
      }, 300);
    }
  }, [index, maxIndex]);

  const prev = (): void => {
    setIndex((i) => (i === 0 ? maxIndex - 1 : i - 1));
  };

  const next = (): void => {
    setIndex((i) => i + 1);
  };

  return (
    <div className="relative py-4">
      {/* Header + Controls */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">Proveedores de Juego</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="px-3 py-1 text-sm rounded bg-zinc-200 hover:bg-zinc-300"
          >
            ◀
          </button>
          <button
            type="button"
            onClick={next}
            className="px-3 py-1 text-sm rounded bg-zinc-200 hover:bg-zinc-300"
          >
            ▶
          </button>
          <button
            type="button"
            onClick={() => onSelectProvider(null)}
            className="px-3 py-1 text-sm rounded bg-zinc-200 hover:bg-zinc-300"
          >
            All
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${(index * 100) / VISIBLE_COUNT}%)`,
          }}
        >
          {items.map((provider, i) => {
            const isSelected =
              selectedProvider &&
              provider.name.toLowerCase().trim() ===
                selectedProvider.toLowerCase().trim();
            return (
              <div
                key={`${provider.name}-${i}`}
                className="w-1/6 px-2 shrink-0 cursor-pointer"
                onClick={() =>
                  onSelectProvider(isSelected ? null : provider.name)
                }
              >
                <div
                  className={`group bg-[#F2F2FA] rounded-xl p-4 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${
                    isSelected ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <img
                    src={provider.iconLight || "/placeholder.png"}
                    alt={provider.name}
                    className="mx-auto h-10 w-auto object-contain"
                  />

                  <h3 className="mt-3 text-sm font-semibold text-zinc-800 truncate">
                    {provider.name}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500">
                    {provider.count} Juegos
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
