import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Center Mandala behind Buddha */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative opacity-30">
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

      {/* Left Side Background Image */}
      <div className="absolute left-0 top-0 z-0 opacity-20">
        <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative">
          <Image
            src="/bg-oneside.png"
            alt="Left Side BG"
            width={400}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Side Background Image - Mirrored */}
      <div className="absolute right-0 top-0 z-0 opacity-20">
        <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative scale-x-[-1]">
          <Image
            src="/bg-oneside.png"
            alt="Right Side BG"
            width={400}
            height={600}
            className="object-contain"
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
            className="object-contain"
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
