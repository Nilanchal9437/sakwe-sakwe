import Image from "next/image";

export default function FindThePath() {
  return (
    <section className="py-4 md:py-16 rounded-2xl bg-[url('/home/findpath.jpg')] bg-center object-contain md:object-cover bg-no-repeat bg-cover lg:min-h-[400px]">
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black my-3 md:mb-6">
          Let's find a path
        </h2>
        <p className="text-lg md:text-xl text-black mb-4 md:mb-10 max-w-sm md:max-w-xl mx-auto">
          Need help figuring out what to start with? We invite children and
          parents to a trial class where our tutor will help choose the best
          path.
        </p>
        <button className="bg-white text-black text-lg md:text-xl font-medium rounded-xl px-8 py-3 md:py-4 shadow-md hover:bg-gray-100 transition-all">
          Sign up for a trial class
        </button>
      </div>
    </section>
  );
}
