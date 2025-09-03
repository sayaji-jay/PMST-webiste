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

      {/* Side Texts - Desktop */}
      <div className="hidden lg:flex w-full max-w-8xl justify-between absolute top-1/2 transform -translate-y-1/2 px-8 z-10">
        {/* Left Side Text */}
        <div className="w-1/3 flex flex-col items-center justify-center text-center px-4 break-words">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-orange-900 leading-relaxed hindi-shimmer cursor-default">
            संस्कृति, संस्कार एवं शौर्य का संगम
          </p>
        </div>

        {/* Right Side Text with Centered ॐ */}
        <div className="w-1/3 flex flex-col items-center justify-center text-center px-4 break-words">
          {/* Centered ॐ */}
          <div className="text-orange-600 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 hover:text-orange-500 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(234,88,12,0.6)] cursor-default">
            ॐ
          </div>
          {/* Slokas with Same Font */}
          <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-orange-900 leading-relaxed space-y-2 hindi-shimmer cursor-default text-center">
            <p>अस्तो मा सद्गमय।</p>
            <p>तमसो मा ज्योतिर्गमय।</p>
            <p>मृत्योर्मा अमृतगमय।</p>
          </div>
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
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-orange-900 drop-shadow-2xl tracking-wider">
          पूर्वांचल मैत्री समाज ट्रस्ट, गांधीनगर में आपका स्वागत है।
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-700 drop-shadow-lg">
          Welcome to Purvanchal Maitree Samaj Trust, Gandhinagar (PMST)
        </p>
      </div>
    </div>
  );
}
