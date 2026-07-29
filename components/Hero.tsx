import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { LuHeart, LuSparkles } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-fondo md:h-screen">
      <div className="mx-auto flex min-h-screen max-w-7xl px-6 md:h-full lg:px-16">
        <div className="grid w-full items-center gap-0 md:h-full md:gap-10 md:grid-cols-[0.7fr_1.3fr]">
          {/* Texto */}
          <div className="flex flex-col justify-center py-12 sm:py-14 md:h-full md:pt-6 lg:-mt-16 lg:py-0">
            {" "}
            <div className="space-y-7">
              <h1 className="relative max-w-[520px]">
                <LuSparkles className="pointer-events-none absolute -left-6 top-2 hidden h-4 w-4 text-rosa/80 sm:block" />
                <LuHeart className="pointer-events-none absolute right-10 top-1 hidden h-4 w-4 text-gris/80 sm:block" />
                <LuSparkles className="pointer-events-none absolute right-20 top-20 hidden h-4 w-4 text-naranja/80 sm:block" />
                <LuHeart className="pointer-events-none absolute left-7 -bottom-4 hidden h-3 w-3 text-naranja/80 sm:block" />
                <span className="font-logo block  font-normal text-gris sm:text-[38px] lg:text-[28px]">
                  Un lugar donde{" "}
                </span>
                <span className="font-hand   text-[34px] text-rosa sm:text-[38px] lg:text-[42px]">
                  LA CREATIVIDAD
                </span>
                <span className=" font-hand -mt-[6px] leading-[1] block text-[34px] text-gris-claro sm:text-[38px] lg:text-[42px]">
                  cobra color{" "}
                </span>
              </h1>

              <p className="max-w-md text-[16px] font-medium leading-relaxed text-gris sm:text-[17px]">
                Talleres creativos para niñas de 4 a 12 años donde crean,
                exploran y desarrollan su imaginación mientras se divierten.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#talleres"
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-rosa px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-rosa-hover"
              >
                VER PRÓXIMOS TALLERES
                <HiOutlineArrowLongRight className="text-lg transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gris-claro bg-white px-5 py-3 text-sm font-semibold text-gris transition-all duration-300 hover:bg-rosa-claro"
              >
                CONOCÉ MÁS
                <LuHeart className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          {/* Imagen */}
          <div className="relative z-0 -mr-6 -mb-20 h-[400px] overflow-hidden rounded-tl-[2rem] md:mb-0 md:h-full md:-mr-[calc((100vw-100%)/2)] md:rounded-l-[2rem]">
            {" "}
            <Image
              src="/images/hero.png"
              alt="Niñas pintando en un taller creativo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-[55%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f6] via-[#fff9f640] to-transparent" />{" "}
          </div>
        </div>

        {/* Onda */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
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
