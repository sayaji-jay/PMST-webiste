import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Center Mandala behind Buddha */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative opacity-30">
          <Image
            src="/mandala.png"
            alt="Mandala Center"
            width={600}
            height={600}
            className="object-contain animate-spin-slow"
            priority
          />
        </div>
      </div>

      {/* Left Side Image with Blue Tint */}
      <div className="absolute left-0 top-0 z-0 hidden md:block">
        <div className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] relative">
          <div className="absolute inset-0 rounded-lg z-10" />
          <Image
            src="/bg-oneside.png"
            alt="Left Side BG"
            width={400}
            height={600}
            className="object-contain relative z-0 opacity-50"
            priority
          />
        </div>
      </div>

      {/* Right Side Image with Blue Tint */}
      <div className="absolute right-0 top-0 z-0 hidden md:block">
        <div className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] relative scale-x-[-1]">
          <div className="absolute inset-0 rounded-lg z-10" />
          <Image
            src="/bg-oneside.png"
            alt="Right Side BG"
            width={400}
            height={600}
            className="object-contain relative z-0 opacity-50"
            priority
          />
        </div>
      </div>

      {/* Buddha above Mandala */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] relative">
          <Image
            src="/buddha.png"
            alt="Buddha"
            width={450}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-30 text-center text-white px-4 mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
          Peace and Tranquility
        </p>
      </div>
    </div>
  );
}
