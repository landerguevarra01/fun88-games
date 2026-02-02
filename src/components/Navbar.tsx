import { useState } from "react";
import { FaBars } from "react-icons/fa";
import type { Category } from "../types/Category";
import { Dropdown } from "./Dropdown";

interface Props {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export default function Navbar({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCasinoOpen, setCasinoOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-white shadow text-black px-[90px] py-[10px] items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
            alt="fun99 logo"
            className="w-[100px]"
          />
        </div>

        <ul className="flex gap-4 text-[#006aff] text-[16px] font-bold">
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

        <div className="flex gap-2 text-white text-[12px]">
          <button className="uppercase bg-blue-400 p-3 rounded-lg cursor-pointer">
            Acceso
          </button>
          <button className="uppercase bg-green-400 p-3 rounded-lg cursor-pointer">
            Registrate
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden bg-white shadow px-4 py-3 items-center justify-between">
        {/* Left: Burger + Logo */}
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMobileOpen(true)}>
            <FaBars className="w-6 h-6 text-[#00A6FF]" />
          </button>
          <img
            src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
            alt="fun99 logo"
            className="w-[100px]"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-2 text-white text-[12px]">
          <button className="uppercase bg-[#00A6FF] p-2 rounded-lg cursor-pointer">
            Acceso
          </button>
          <button className="uppercase bg-green-400 p-2 rounded-lg cursor-pointer">
            Registrate
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-999 h-screen w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 z-9999 h-screen w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out
  ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="h-full overflow-y-auto flex flex-col justify-start">
            <div className="px-5 py-10 text-[#00A6FF]">
              <p className="uppercase text-base mb-6">Bienvenido!</p>

              <button className="w-full bg-[#00A6FF] text-white uppercase py-2 mb-3 rounded-md">
                Acceso
              </button>
              <button className="w-full uppercase py-2 mb-6 underline rounded-md">
                Registrate
              </button>

              {/* Casino Dropdown */}
              <div className="mb-4">
                <div
                  className="flex justify-between items-center px-3 py-2 cursor-pointer border-b border-gray-200"
                  onClick={() => setCasinoOpen(!isCasinoOpen)}
                >
                  <p className="uppercase">Casino</p>
                  <svg
                    className={`w-4 h-4 text-blue-400 transition-transform duration-200 ${
                      isCasinoOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 16 10"
                  >
                    <polygon points="0,0 16,0 8,10" />
                  </svg>
                </div>

                {isCasinoOpen && (
                  <div className="flex flex-col mt-2 pl-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onSelectCategory(cat.id);
                          setIsMobileOpen(false);
                        }}
                        className={`py-2 text-left uppercase hover:underline ${
                          selectedCategory === cat.id ? "font-bold" : ""
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* New Dropdown Below Casino */}
              <div className="mb-4">
                <Dropdown title="Apuestas Deportivas">
                  <a
                    href="/casino/inicio/sports/im"
                    className="py-2 px-0 uppercase hover:underline"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Más transmisiones
                  </a>
                  <a
                    href="/casino/inicio/sports/bti"
                    className="py-2 px-0 uppercase hover:underline"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Mejor cuota
                  </a>
                  <a
                    href="/sports"
                    className="py-2 px-0 uppercase hover:underline"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Apuesta y Gana
                  </a>
                </Dropdown>
              </div>

              {/* Mi Perfil Dropdown */}
              <Dropdown title="Mi Perfil">
                <a
                  href="/profile"
                  className="py-2 px-0 uppercase hover:underline"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Información personal
                </a>
                <a
                  href="/"
                  className="py-2 px-0 uppercase hover:underline"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Cambiar Contraseña
                </a>
              </Dropdown>

              {/* Verificación de Usuario Link */}
              <a
                href="/casino/inicio"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Verificación de Usuario
              </a>

              {/* Cajero Dropdown */}
              <Dropdown title="Cajero">
                <span className="py-2 px-0 uppercase hover:underline flex items-center">
                  Deposito
                </span>
                <span className="py-2 px-0 uppercase hover:underline flex items-center">
                  Retiros
                </span>
                <a
                  href="/casino/inicio"
                  className="py-2 px-0 uppercase hover:underline flex items-center"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Transacciones
                </a>
                <a
                  href="/casino/inicio?tab=all"
                  className="py-2 px-0 uppercase hover:underline flex items-center"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Transacciones financieras
                </a>
                <a
                  href="/casino/inicio?tab=all"
                  className="py-2 px-0 uppercase hover:underline flex items-center"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Historial de Bonos
                </a>
              </Dropdown>

              <a
                href="/casino/inicio"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Bono Gratis
              </a>
              {/* Referidos Link */}
              <a
                href="/casino/inicio"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Referidos
                <div className="bg-red-500 px-1 py-0.5 text-[9px] text-white relative">
                  <div
                    className="absolute top-0 left-[-3px] w-0 h-0 
        border-l-[6px] border-l-transparent 
        border-r-[6px] border-r-transparent 
        border-t-[6px] border-t-red-500"
                  ></div>
                  Gana hasta $888
                </div>
              </a>

              {/* Sugerencias Link */}
              <a
                href="/casino/inicio"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Sugerencias
                <div className="inline animate-bounce duration-200 w-[22px] h-[22px] -ml-2 mr-auto">
                  <img
                    src="data:image/webp;base64,UklGRpoDAABXRUJQVlA4WAoAAAAQAAAAYwAAYwAAQUxQSHIBAAABkFbbTl1rW0IkIAEJkVAJSKiESDgSkFAJSEBCJcRBfgAtgfu9HyMiJgB/XaYkIsJOxCIiKezClw2vNI3SZcMSt0j2WIVmkKg9ThuwvVWhNyRqb+N65ZXZzc+O296X5aJN/TygbFPjatLRk/m8HlihXqg21pyYk3bO1UqH0dJ5D6xSE9WGdyK0RyfvgbFozyoAqtZXwbhT9qARQumZAB/rXwHjsMfVqTwCcq8C2jvxkGvns1rqmN2XtLnYGLChliztpdZPq5H2Jl5AHby/sfwxjYFj2rEe0hw9ACDpnIQdubzTD6Ebsr4rEZtGKQ/uIozHx6fogyIRWwfuYnLkNuD7lMWVeySu0S/e5hwaquZbyKuYNzds3tmJ7GtQJ/4i7C8B+CLUK38N4kWXV2ioOmXyAgK7RnSJXQk/2MTTqUc8fSEqNl+pieaYaZVqntywh+VFou1li/Bu/N9EtAZ0r4JFo3pEtzuuAjpkekJLp0w/8PdkVlA4IAICAAAwDwCdASpkAGQAPp1Mn0uuMasoIhqroLATiWQIcAGPSmV/v9V5VDnaWo755b8QHqA/N28A/k/oA83H+U/sl7gPO384D2APQY6THI1iaep+8W58LNcLfeMXE+nTK7OTrDJmPwQHJNsH/BT0xUABJ6jPhMJwkHTSDwYuEjjN9bWfwqKAAP6z4r/+rz5yVy8jQpfMlP+ZHuSXF7K4+YoUzCMh9sntdg6dvH//V5hQLtgeKKfN62qN3GIRooxjiupgbVAfZaprF5t7pi2NQAVJsuTpBExmzIcMoIOEox3ZtmCc+0djQFVwSBlWTlozQmjLRKROzhNlK9XbiK6a1T4C1EkiVacNF9JI2AxJ6Hv/g+Ez7Ouh4TiJisMQmugfk0GqMWpfSpWapHDtC0Iw+mn4z3T1OY/MY4+WCkBeSxDRKZHxgXMEDH3o5hLRC4AvQd+1ttFpyJ//l5PYSc9ACrjnnYdNC+vM/D7nHwjArUFLo9GHKD/kg8cA9s1CvOVYQ9vaF2e2lq1Lev+X2gY9ht2mbWdSEhgfFbb4U8isXriTBrl3l41/vd4SVlpmPaaBXEg0TLFPKhe9GBS3d9GwqowwLChgI65m3QD/uvafBZnnvzB8lYvWBKJeWJFDvrCn/hqmMl9i5cQtJmULk1d/K8gAWw47XeGq2r3TiSNnb6VkgAAAAAAA"
                    alt="Gift"
                    className="w-full h-full"
                  />
                </div>
              </a>

              <a
                href="/promotions"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Promociones
              </a>
              <a
                href="/sponsors"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                Patrocinadoras
              </a>
              <a
                href="/blogs"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                BLOGS
              </a>
              <a
                href="/news"
                className="border-b border-gray-200 uppercase text-base w-full inline-flex gap-2 items-start px-3 py-2.5 mt-2.5 hover:bg-zinc-50"
                onClick={() => setIsMobileOpen(false)}
              >
                NOTICIAS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
