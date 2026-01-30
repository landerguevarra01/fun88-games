import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow text-black p-4 flex justify-between items-center px-[150px] py-[10px]">
      <div>
        <img
          src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
          alt="fun99 logo"
          className="w-[100px]"
        />
      </div>
      <ul className="flex gap-4 text-[#006aff] text-[16px] font-bold">
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Deportes 1
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Deportes 2
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Deportes 3
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Casino
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Promociones
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Blogs
        </li>
        <li className="hover:text-yellow-400 cursor-pointer uppercase">
          Noticias
        </li>
      </ul>
      <div className="flex gap-[10px] text-white text-[12px]">
        <button className="uppercase bg-blue-400 p-3 rounded-lg">Acceso</button>
        <button className="uppercase bg-green-400 p-3 rounded-lg">
          Registrate
        </button>
      </div>
    </nav>
  );
}
