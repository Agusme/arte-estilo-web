import Image from "next/image";

export default function Hero() {
  return (
<section className="relative min-h-dvh overflow-hidden bg-fondo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Texto */}
          <div className="flex min-h-[600px] pl-6 flex-col pt-16">
            <div className="space-y-6 ">
              <h1 className="font-title leading-[1.05]">
                <span className="font-hand block text-[40px] font-normal tracking-tight text-gris lg:text-[45px]">
                  Un lugar donde
                </span>

                <span className="font-logo mt-1 block text-[40px] text-rosa lg:text-[45px]">
                  la creatividad
                </span>

                <div className="mt-1">
                  <span className="font-logo text-[40px] text-verde lg:text-[45px]">
                    cobra color
                  </span>

                  <svg
                    className="ml-10 mt-1 h-3 w-32"
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

              <p className="max-w-md text-[18px] font-semibold text-gris">
                Talleres creativos para niñas de 5 a 12 años donde crean,
                exploran y desarrollan su imaginación mientras se divierten.
              </p>
            </div>

<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
  <a
    href="#talleres"
    className="inline-flex items-center justify-center rounded-full bg-rosa px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-rosa-hover"
  >
    VER PRÓXIMOS TALLERES →
  </a>

  <a
    href="#sobre-mi"
    className="inline-flex items-center justify-center rounded-full border border-gris-claro bg-white px-6 py-4 text-sm font-semibold text-gris transition-all duration-300 hover:bg-rosa-claro"
  >
    CONOCÉ MÁS ♡
  </a>
</div>
          </div>

          {/* Imagen */}
          <div className="relative -mr-[calc((100vw-100%)/2)] h-[650px]">
            <Image
              src="/images/hero.png"
              alt="Niñas pintando en un taller creativo"
              fill
              priority
className="object-cover object-[42%_58%]"            />

            <div className="absolute inset-0 bg-gradient-to-r from-fondo via-[#fff8f580] to-transparent" />
          </div>
        </div>

        {/* Onda */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 180"
    preserveAspectRatio="none"
    className="block h-32 w-full lg:h-40"
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
        L1440,180
        L0,180
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