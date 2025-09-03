import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-20">
          <Image
            src="/mandala.png"
            alt="Mandala Center"
            width={500}
            height={500}
            className="object-contain animate-spin-slow"
            priority
          />
        </div>
      </div>

      {/* Top Text Section */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 drop-shadow-2xl tracking-wider">
          WELCOME
        </h1>
      </div>

      {/* Side Texts - Desktop */}
      <div className="hidden lg:flex w-full max-w-6xl justify-between items-center absolute top-1/2 transform -translate-y-1/2 px-8 z-10">
        <div className="text-gray-600 font-semibold text-xl xl:text-2xl drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            Inner Peace
          </p>
        </div>
        <div className="text-gray-600 font-semibold text-xl xl:text-2xl drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            Mindfulness
          </p>
        </div>
      </div>

      {/* Buddha Image */}
      <div className="flex-shrink-0 z-10 mb-4 sm:mb-6 md:mb-8">
        <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-[30rem] relative">
          <Image
            src="/buddha.png"
            alt="Buddha"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="text-center z-10">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 drop-shadow-lg">
          Peace and Tranquility
        </p>
      </div>

      {/* Mobile Side Texts */}
      <div className="flex lg:hidden justify-between w-full max-w-md mt-6 z-10">
        <div className="text-gray-600 font-semibold text-sm sm:text-base drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
            Inner Peace
          </p>
        </div>
        <div className="text-gray-600 font-semibold text-sm sm:text-base drop-shadow-md">
          <p className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
            Mindfulness
          </p>
        </div>
      </div>
    </div>
  );
}
