import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { LuHeart } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-fondo">
      <div className="mx-auto flex h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full w-full items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Texto */}
          <div className="flex h-full flex-col justify-center pl-6">
            {" "}
            <div className="space-y-5">
              <h1 className="font-title leading-[0.95] tracking-tight">
                <span className="font-hand block text-[34px] font-normal text-gris sm:text-[38px] lg:text-[42px]">
                  Un lugar donde
                </span>

                <span className="font-logo mt-1 block text-[34px] text-rosa sm:text-[38px] lg:text-[42px]">
                  la creatividad
                </span>

                <div className="mt-1">
                  <span className="font-hand block text-[34px] text-verde sm:text-[38px] lg:text-[42px]">
                    cobra color
                  </span>

                  <svg
                    className="ml-8 mt-1 h-3 w-28 sm:ml-10 sm:w-32"
                    viewBox="0 0 180 20"
                    fill="none"
                  >
                    <path
                      d="M4 12 C40 18,90 2,176 12"
                      stroke="var(--color-lila)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </h1>

              <p className="max-w-md text-[16px] font-semibold leading-relaxed text-gris sm:text-[17px]">
                Talleres creativos para niñas de 4 a 12 años donde crean,
                exploran y desarrollan su imaginación mientras se divierten.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#talleres"
                className="group inline-flex items-center gap-2 rounded-full bg-rosa px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-rosa-hover"
              >
                VER PRÓXIMOS TALLERES
                <HiOutlineArrowLongRight className="text-xl transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 rounded-full border border-gris-claro bg-white px-6 py-4 text-sm font-semibold text-gris transition-all duration-300 hover:bg-rosa-claro"
              >
                CONOCÉ MÁS <LuHeart className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          {/* Imagen */}
          <div className="relative h-full -mr-[calc((100vw-100%)/2)] overflow-hidden rounded-l-[2rem]">
            {" "}
            <Image
              src="/images/hero.png"
              alt="Niñas pintando en un taller creativo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-[42%_58%]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-fondo via-[#fff8f580] to-transparent" />
          </div>
        </div>

        {/* Onda */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block h-20 w-full lg:h-24"
          >
            {/* Línea rosa */}
            <path
              d="
        M0,70
        C180,20 360,120 540,70
        S900,20 1080,70
        S1260,120 1440,70
      "
              fill="none"
              stroke="#F6AFC4"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Onda blanca */}
            <path
              d="
        M0,76
        C180,26 360,126 540,76
        S900,26 1080,76
        S1260,126 1440,76
        L1440,120
        L0,120
        Z
      "
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
