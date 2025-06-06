export default function LearningOptions() {
  return (
    <section className="w-full px-2 lg:px-0 py-16">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-12 gap-y-6">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-left leading-tight mb-2 text-black">
            Learning <span className="text-blue-500">one-on-one</span> or
            <br />
            with <span className="text-blue-500">pals</span>
          </h2>
        </div>
        <div className="text-gray-600 text-lg font-medium md:w-[400px] leading-snug mt-2 lg:mt-0">
          At Sakwe-Sakwe, kids learn digital skills and practice creating real
          projects in courses, unleashing their inner artists and entrepreneurs
          in the process.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Group classes card */}
        <div className="bg-[#F4F7FF] rounded-2xl p-8 flex flex-col relative min-h-[420px]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-y-5">
            <div>
              <span className="text-blue-500 text-sm font-medium mb-2">
                Group classes
              </span>
              <h3 className="text-2xl lg:text-2xl font-bold text-black md:max-w-[60%]">
                Not just a class, but a team of like-minded people
              </h3>
            </div>
            <img
              src="/home/chat.png"
              alt="Group Emoji"
              className="w-30 h-30 object-contain mx-auto md:ml-2"
            />
          </div>
          <hr className="my-6 border-blue-100" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 mb-8">
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>Small groups of up to 8 people.</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>Kids who learn to create projects together as a team.</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>
                Teachers who know how to find a common language with everyone.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>Future friends with similar interests.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-auto pt-2 gap-y-2">
            <button className="bg-blue-500 text-white text-lg font-medium rounded-xl px-8 py-3 hover:bg-blue-600 transition-colors">
              Learn more
            </button>
            <span className="text-gray-400 text-base ml-4">
              From <span className="text-blue-500">$10</span>/lesson
            </span>
          </div>
        </div>
        {/* Individual lessons card */}
        <div className="bg-[#F4F7FF] rounded-2xl p-8 flex flex-col relative min-h-[420px]">
          <div className="flex flex-col md:flex-row items-start justify-between gap-y-5">
            <div>
              <span className="text-blue-500 text-sm font-medium mb-2">
                Individual lessons
              </span>
              <h3 className="text-2xl lg:text-2xl font-bold text-black md:max-w-[60%]">
                Go at the child's pace, with undivided attention
              </h3>
            </div>
            <img
              src="/home/hand.png"
              alt="Individual Emoji"
              className="w-30 h-30 object-contain mx-auto md:ml-2"
            />
          </div>
          <hr className="my-6 border-blue-100" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 mb-8">
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>One-on-one sessions with a tutor.</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>Deep dives into topics of student's interest.</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>
                Lessons that take student's individual features into account.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 mt-1 flex jutify-center">
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              </div>
              <span>Not just a tutors, but a partners.</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-auto pt-2 gap-y-2">
            <button className="bg-blue-500 text-white text-lg font-medium rounded-xl px-8 py-3 hover:bg-blue-600 transition-colors">
              Learn more
            </button>
            <span className="text-gray-400 text-base ml-4">
              From <span className="text-blue-500">$10</span>/lesson
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
