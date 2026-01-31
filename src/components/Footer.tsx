import "../App.css";

const images = [
  "711.webp",
  "ahorro.webp",
  "bbva.webp",
  "benavides.webp",
  "calimax.webp",
  "extra.webp",
  "gry.webp",
  "hsbc.webp",
  "k.webp",
  "lacomer.webp",
  "mastercard.webp",
  "money.webp",
  "neosurf.webp",
  "oxxo.webp",
  "paynet.webp",
  "roma.webp",
  "samsclub.webp",
  "santander.webp",
  "scotiabank.webp",
  "soriano.webp",
  "spe.webp",
  "stp.webp",
  "superf.webp",
  "tele.webp",
  "visa.webp",
  "walmart.webp",
];

export default function Footer() {
  return (
    <div className="relative max-w-screen w-full bg-[#002335] text-[#00A6FF] px-[90px] py-[50px]">
      <div className="my-0">
        <div className="grid grid-cols-[1fr_1fr] gap-5 mb-[50px] px-3 py-0 xl:flex xl:justify-between xl:grid-cols-4 xl:mt-0 xl:mb-10 xl:px-[90px] 2xl:max-w-screen-2xl 2xl:mx-auto 3xl:max-w-screen-3xl 3xl:mx-auto 3xl:p-0 3xl:px-[150px] 4xl:px-[250px]">
          <div>
            <p className="block text-left text-sm font-semibold text-highlight uppercase mb-3 xl:text-lg xl:mb-3">
              Información
            </p>
            <a
              href="/help/we"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Sobre Nosotros
            </a>
            <a
              href="/help/terminos-y-condiciones"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Términos y condiciones
            </a>
            <a
              href="/help/juego-responsable"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Juego Responsable
            </a>
            <a
              href="/help/privacy-notice-and-site-cookies"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Aviso de privacidad y cookies del sitio
            </a>
            <a
              href="/help/affiliate-program"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Programa de afiliación
            </a>
            <a
              href="/help/betting-mechanics"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Mecánica de apuestas
            </a>
            <a
              href="/help/betting-conditions"
              className="block text-highlight text-xs text-left font-light mb-0 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base hover:opacity-70"
            >
              Condiciones de apuesta
            </a>
          </div>

          <div>
            <p className="block text-left text-sm font-semibold text-highlight uppercase mb-3 xl:text-lg xl:mb-3">
              Nuestras Secciones
            </p>
            <a
              href="/sports"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Deportes
            </a>
            <button className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70">
              Juegos
            </button>
            <div className="overflow-hidden transition-all duration-[0.3s] h-0">
              <a
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70 active"
                href="/casino/inicio"
                data-status="active"
              >
                inicio
              </a>
              <a
                href="/casino/popular"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                popular
              </a>
              <a
                href="/casino/jackpot"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                jackpot
              </a>
              <a
                href="/casino/nuevo"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                nuevo
              </a>
              <a
                href="/casino/casual"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                casual
              </a>
              <a
                href="/casino/crash"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                crash
              </a>
              <a
                href="/casino/pragmatic"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                pragmatic
              </a>
              <a
                href="/casino/fat-panda"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                fat panda
              </a>
              <a
                href="/casino/playtech"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                playtech
              </a>
              <a
                href="/casino/slots"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                slots
              </a>
              <a
                href="/casino/bingo"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                bingo
              </a>
              <a
                href="/casino/en-vivo"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                en vivo
              </a>
              <a
                href="/casino/cartas"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                cartas
              </a>
              <a
                href="/casino/otros"
                className="no-underline capitalize last:mb-2 block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
              >
                otros
              </a>
            </div>
            <a
              href="/promotions"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Promociones
            </a>
            <a
              href="/sponsors"
              className="block text-highlight text-xs text-left font-light mb-0 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base hover:opacity-70"
            >
              Patrocinadoras
            </a>
          </div>

          <div>
            <p className="block text-left text-sm font-semibold text-highlight uppercase mb-3 xl:text-lg xl:mb-3">
              Ayuda
            </p>
            <a
              href="/help/faq"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Preguntas frecuentes
            </a>
            <a
              href="/help/deposit"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Depósito
            </a>
            <a
              href="/help/withdraw"
              className="block text-highlight text-xs text-left font-light mb-3 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base xl:mb-2.5 hover:opacity-70"
            >
              Retirar
            </a>
            <a
              href="/help/refund-policy"
              className="block text-highlight text-xs text-left font-light mb-0 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base hover:opacity-70"
            >
              Política de reembolso
            </a>
          </div>

          <div>
            <p className="block text-left text-sm font-semibold text-highlight uppercase mb-3 xl:text-lg xl:mb-3">
              Contacto
            </p>
            <a
              href="/contact-us"
              className="block text-highlight text-xs text-left font-light mb-0 transition-all duration-[0.2s] ease-[ease-in-out] xl:text-base hover:opacity-70"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="px-3 py-0 xl:px-[90px] 2xl:max-w-screen-2xl 2xl:mx-auto 3xl:max-w-screen-3xl 3xl:mx-auto 3xl:px-[150px] 4xl:px-[250px]">
          <div className="flex mt-[-30px] gap-3 mb-4 xl:-mt-5">
            <a
              className="w-[150px] aspect-[450_/_141] xl:w-[200px]"
              href="https://apps.apple.com/mx/app/fun88/id6602890791"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="To download ios app"
            >
              <img
                src="https://www.fun88.mx/assets/app_store-293da5f6.webp"
                alt="App Store"
                className="w-[150px] aspect-[450_/_141] xl:w-[200px]"
              />
            </a>
            <a
              className="w-[150px] aspect-[450_/_141] xl:w-[200px]"
              href="https://play.google.com/store/apps/details?id=com.fun88_mexico_rn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="To download android app"
            >
              <img
                src="/assets/footer/android_store.webp"
                alt="Play Store"
                className="w-[150px] aspect-[450_/_141] xl:w-[200px]"
              />
            </a>
          </div>
          <p className="w-full flex flex-wrap items-center justify-center text-md text-center text-highlight mt-4">
            <span className="flex items-center">
              <a
                href="https://www.fun88vnu.com/vn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Vietnam"
              >
                Fun88 Vietnam
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88vnofficial.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Vietnam 1"
              >
                Fun88 Vietnam 1
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88vnplay.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Vietnam EN"
              >
                Fun88 Vietnam EN
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88tha.com/th/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Thailand"
              >
                Fun88 Thailand
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88thofficial.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Thailand 1"
              >
                Fun88 Thailand 1
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88asiath.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Thailand EN"
              >
                Fun88 Thailand EN
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://global.f88.uk/cn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 China"
              >
                Fun88 China
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88mx.mx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Mexico"
              >
                Fun88 Mexico
              </a>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88.cl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Chile"
              >
                Fun88 Chile
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88ar.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Argentina"
              >
                Fun88 Argentina
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://www.fun88py.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Paraguay"
              >
                Fun88 Paraguay
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://link.fun88-india.com/fun88"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 India"
              >
                Fun88 India
              </a>
              <span className="mx-2 h-4 w-px bg-slate-400"></span>
            </span>
            <span className="flex items-center">
              <a
                href="https://global.fun88.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="To visit Fun88 Global"
              >
                Fun88 Global
              </a>
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 py-8">
          <a
            href="https://t.me/FUN88Mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit tg page"
          >
            <img
              alt="tg"
              src="https://www.fun88mx.mx/assets/telegram_channel-9458e6ef.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
          <a
            href="https://www.instagram.com/fun88mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit tg page"
          >
            <img
              alt="ig"
              src="https://www.fun88mx.mx/assets/instagram-d8313cdc.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
          <a
            href="https://www.facebook.com/fun88mex"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit fb page"
          >
            <img
              alt="fb"
              src="https://www.fun88mx.mx/assets/facebook-8d0a39d0.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
          <a
            href="https://x.com/fun88mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit fb page"
          >
            <img
              alt="x"
              src="https://www.fun88mx.mx/assets/twitterx-03b6e839.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
          <a
            href="https://tiktok.com/@oficialfun88mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit fb page"
          >
            <img
              alt="tiktok"
              src="https://www.fun88mx.mx/assets/tiktok-390c1791.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
          <a
            href="https://youtube.com/@FUN88Mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer transition-all duration-[0.2s] ease-[ease-in-out] flex mb-[5px] hover:scale-125"
            aria-label="To visit fb page"
          >
            <img
              alt="yt"
              src="https://www.fun88mx.mx/assets/youtube-50d53170.webp"
              className="pointer-events-none aspect-square w-[45px] lg:w-[50px] h-[45px] lg:h-[50px] text-[10px] text-txt text-pretty"
            />
          </a>
        </div>
        <img
          className="w-[250px] block aspect-[932_/_267] mt-0 mb-6 mx-auto xl:w-[300px] xl:mt-0 xl:mb-9 xl:mx-auto"
          src="https://www.fun88.mx/assets/newcastle-beac8089.webp"
          alt="New Castle"
        />
        <div className="marquee">
          <div className="marquee__track">
            {/* first group */}
            <div className="marquee__group">
              {images.map((img, i) => (
                <img
                  key={`img-1-${i}`}
                  src={`/assets/Marquee/${img}`}
                  alt=""
                  className="marquee__img"
                />
              ))}
            </div>

            {/* duplicated group */}
            <div className="marquee__group">
              {images.map((img, i) => (
                <img
                  key={`img-2-${i}`}
                  src={`/assets/Marquee/${img}`}
                  alt=""
                  className="marquee__img"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 justify-center items-center py-12">
          <img
            src="/assets/therapy.webp"
            alt="t"
            className="w-auto h-[33px] xl:h-[45px]"
          />
          <img
            src="/assets/18.webp"
            alt="18"
            className="w-auto h-[33px] xl:h-[45px]"
          />
          <img
            src="/assets/ssl.webp"
            alt="ssl"
            className="w-auto h-[33px] xl:h-[45px]"
          />
        </div>
        <p className="mb-4">
          WWW.FUN88MX.MX OPERADA EN MEXICO POR PRODUCCIONES MÓVILES S.A. DE
          C.V., TITULAR DEL PERMISO DGAJS/SCEVF/P-06/2005-TER EN UNIÓN DE
          UNOCAPALI LA PAZ OPERADORA S.A. DE C.V. DE CONFORMIDAD CON LOS OFICIOS
          DGJS/1580/2021 Y DGJS/DCRCA/1424/2022. JUEGOS PROHIBIDOS PARA MENORES
          DE EDAD, JUEGUE RESPONSABLEMENTE, NO OLVIDE QUE EL PRINCIPAL PROPÓSITO
          ES LA RECREACIÓN, DIVERSIÓN Y ESPARCIMIENTO.
        </p>
      </div>
    </div>
  );
}
