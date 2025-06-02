import Image from "next/image";
import Container from "@/components/Container";

export default function ContactForm() {
  return (
    <section
      className="w-full bg-lime-200 min-h-[600px] flex items-center justify-center py-16"
      style={{ backgroundColor: "#89e894" }}
    >
      <Container className="flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Left: Large text blocks and image */}
        <div className="flex flex-col items-start gap-6 flex-1 min-w-[320px]">
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl px-8 py-4 text-4xl md:text-5xl font-semibold text-gray-900 shadow text-left w-fit">
              want to create
            </div>
            <div className="bg-white rounded-2xl px-7 py-4 text-4xl md:text-5xl font-semibold text-gray-900 shadow text-left w-fit">
              something
            </div>
            <div className="bg-white rounded-2xl p-4 text-4xl md:text-5xl font-semibold text-gray-900 shadow text-left w-fit">
              like this?
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <Image
                src="/home/contact.png"
                alt="example"
                width={300}
                height={300}
                className="rounded-xl object-cover border border-black"
              />
            </div>
            <div className="ml-15">
              {/* Pink left arrow */}
              <Image
                src="/home/arrow.png"
                alt="arrow"
                width={50}
                height={40}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        {/* Right: Description, avatars, pink circle, and form */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 min-w-[320px]">
          <p className="text-gray-900 text-lg md:text-lg max-w-md text-left mb-2">
            The land of childhood wonder and creativity is just a few clicks
            away. Book a free trial class now! We're waiting for you to join our
            community!
          </p>
          {/* Avatars and pink circle */}
          <div className="flex items-center gap-2 mb-2 relative">
            <div>
              <Image
                src="/home/faces.png"
                alt="faces"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>
          {/* Form */}
          <form className="w-full flex flex-col gap-4 mt-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-4 rounded-xl bg-white border-none text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="text"
              placeholder="Student's age"
              className="w-full px-6 py-4 rounded-xl bg-white border-none text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-xl bg-white border-none text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <input
              type="text"
              className="w-full px-6 py-4 rounded-xl bg-white border-none text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              type="submit"
              className="w-fit mt-8 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-md transition text-lg hover:bg-lime-100"
            >
              Sign up for a trial class
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
