import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff7f3] pb-24">
      {" "}
      <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-[600px] flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-black  text-[#e85f88] sm:text-5xl lg:text-6xl">
                Un lugar donde{" "}
                <span className="text-[#98ad6f]">la creatividad</span> cobra
                color.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#7a6a61] sm:text-lg">
                Talleres creativos para niñas donde la imaginación se convierte
                en arte y los momentos se vuelven recuerdos.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#talleres"
                className="inline-flex items-center justify-center rounded-full bg-[#e85f88] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ff81b8]"
              >
                Ver próximos talleres
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a6a61]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#e85f88]" />
                Cupos limitados
              </span>
            </div>
          </div>

<div className="relative -mr-[calc((100vw-100%)/2)] h-[650px]">            <Image
              src="/images/hero.png"
              alt="Niñas pintando en un taller creativo"
              fill
              priority
className="object-cover object-[50%_50%]"
/>

            {/* Degradado para que el texto respire */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff7f3] via-[#fff7f340] to-transparent" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[220px]"
          >
            <path
              fill="#fff"
              d="
        M0,180
        C220,320
        520,40
        760,160
        C980,260
        1220,80
        1440,180
        L1440,320
        L0,320
        Z
      "
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
