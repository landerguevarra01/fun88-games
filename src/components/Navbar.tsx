import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow text-black p-4 flex justify-between items-center px-[90px] py-[10px]">
      <div className="flex ml-10">
        <img
          src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
          alt="fun99 logo"
          className="w-[100px]"
        />
      </div>
      <div className="flex justify-center items-center gap-[10px] text-white text-[12px]">
        <ul className="flex gap-4 text-[#006aff] text-[16px] font-bold mr-8">
          {[
            "Deportes 1",
            "Deportes 2",
            "Deportes 3",
            "Casino",
            "Promociones",
            "Blogs",
            "Noticias",
          ].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer uppercase
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[1px] after:w-0 after:bg-[#006aff]
        after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="uppercase bg-blue-400 p-3 rounded-lg">Acceso</button>
        <button className="uppercase bg-green-400 p-3 rounded-lg">
          Registrate
        </button>
      </div>
    </nav>
  );
}
