import type { Provider } from "../types/Providers";

interface Props {
  open: boolean;
  providers: Provider[];
  selectedProvider: string | null;
  onApply: (provider: string | null) => void;
  onClose: () => void;
}

export default function ProvidersFilterModal({
  open,
  providers,
  selectedProvider,
  onApply,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Select Provider
        </h2>

        <div className="grid grid-cols-3 gap-4 max-h-[300px] overflow-y-auto">
          {providers.map((provider) => {
            const active = selectedProvider === provider.name;

            return (
              <button
                key={provider.name}
                onClick={() => onApply(active ? null : provider.name)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border transition
                  ${
                    active
                      ? "border-yellow-400 bg-yellow-100"
                      : "border-zinc-200 hover:bg-zinc-100"
                  }`}
              >
                <img
                  src={provider.iconLight || "/placeholder.png"}
                  alt={provider.name}
                  className="h-12 w-12 object-contain mb-2"
                />
                <span className="text-xs text-center text-zinc-800 truncate">
                  {provider.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
