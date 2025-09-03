import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer with Side Images and Mandala */}
      <div className="absolute inset-0 z-0">
        {/* Center Mandala behind Buddha */}
        <div className="absolute inset-0 flex items-center justify-center">
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

        {/* Left Side Image */}
        <div className="absolute left-0 top-0 hidden md:block">
          <div className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] relative">
            <Image
              src="/bg-oneside.png"
              alt="Left Side BG"
              width={400}
              height={600}
              className="object-contain opacity-50"
              priority
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="absolute right-0 top-0 hidden md:block">
          <div className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] relative scale-x-[-1]">
            <Image
              src="/bg-oneside.png"
              alt="Right Side BG"
              width={400}
              height={600}
              className="object-contain opacity-50"
              priority
            />
          </div>
        </div>
      </div>

      {/* Buddha Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
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

      {/* Text Above Buddha */}
      <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-1/2 transform -translate-x-1/2 z-20 text-center px-4">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 drop-shadow-2xl tracking-wider">
          WELCOME
        </h1>
      </div>

      {/* Text Below Buddha */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center px-4">
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 drop-shadow-lg">
          Peace and Tranquility
        </p>
      </div>

      {/* Left Side Text - Mobile & Desktop */}
      <div className="absolute left-2 xs:left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="text-gray-600 font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
            Inner Peace
          </p>
        </div>
      </div>

      {/* Right Side Text - Mobile & Desktop */}
      <div className="absolute right-2 xs:right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="text-gray-600 font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
            Mindfulness
          </p>
        </div>
      </div>

      {/* Mobile Additional Text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4 block md:hidden">
        <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-600 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
          Find Your Balance
        </p>
      </div>

      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 text-center px-4 block md:hidden">
        <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-600 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
          Spiritual Journey
        </p>
      </div>
    </div>
  );
}
