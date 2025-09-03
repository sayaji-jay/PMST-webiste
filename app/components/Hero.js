import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mandala at the bottom */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative">
          <Image
            src="/mandala.png"
            alt="Mandala"
            width={600}
            height={600}
            className="animate-spin-slow opacity-40 mix-blend-screen object-contain"
            priority
          />
        </div>
      </div>

      {/* Buddha above Mandala */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-80 h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] relative">
          <Image
            src="/buddha.png"
            alt="Buddha"
            width={450}
            height={600}
            className="object-contain "
            priority
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-30 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl drop-shadow-md">
          Peace and Tranquility
        </p>
      </div>
    </div>
  );
}
