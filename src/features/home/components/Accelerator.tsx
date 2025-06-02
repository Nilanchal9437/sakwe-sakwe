import Image from 'next/image'; 

export default function Accelerator() {
  return (
    <div className="relative bg-[#FFFAE9] rounded-2xl p-6 md:p-12 w-full">
      {/* Rocket image top-right */}
      <div className="absolute -top-15 right-0 md:-top-12 md:-right-12 lg:-top-14 lg:-right-14 xl:-top-20 xl:-right-20">
        <Image
          src="/home/rocket.png"
          alt="rocket"
          width={220}
          height={220}
          objectFit='contain'
          className='h-[120px] w-[120px] md:h-[220px] md:w-[220px]'
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Text */}
        <div className="flex-1 min-w-[260px] max-w-md">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Accelerator</h2>
          <p className="text-gray-800 text-lg mb-8">
            Students who want to take their vision further can apply their skills to real monetizable projects. We provide them with help and guidance in our free accelerator program.
          </p>
          <button className="bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold px-12 py-4 rounded-xl text-xl transition mb-4">
            Learn more
          </button>
        </div>
        {/* Right: Cards */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center w-full">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-lime-200 rounded-2xl p-6 w-full min-h-full shadow-md"
              style={{ backgroundColor: '#89e894' }}
            >
              {/* Image placeholder */}
              <div className="bg-gray-300 rounded-xl w-full h-36 mb-6" />
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Minecraft</div>
                <div className="text-gray-800 text-base mb-8">3.000+ players</div>
              </div>
              <div className="text-gray-700 text-sm mt-auto">Alex, 17, studiesprogramming</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 