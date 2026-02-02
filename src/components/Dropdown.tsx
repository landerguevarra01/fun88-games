import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Dropdown({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 transition-all duration-200 ease-in-out overflow-hidden">
      <div
        className="flex justify-between items-center px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[#00A6FF] uppercase">{title}</p>
        <svg
          className={`w-4 h-4 text-[#00A6FF] transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 16 10"
        >
          <polygon points="0,0 16,0 8,10" />
        </svg>
      </div>

      {isOpen && <div className="flex flex-col mt-2 pl-4">{children}</div>}
    </div>
  );
}
