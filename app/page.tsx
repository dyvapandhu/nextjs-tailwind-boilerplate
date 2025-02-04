export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          NEXT.JS 15 + Tailwind 4 boilerplate
        </h1>

        <p className="mt-4 sm:text-xl/relaxed">
          The React Framework for the Web Used by some of the world&apos;s
          largest companies, Next.js enables you to create high-quality web
          applications with the power of React components.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded-sm bg-black px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-white hover:text-black focus:ring-3 focus:outline-hidden sm:w-auto"
            href="#"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded-sm px-12 py-3 text-sm font-medium shadow-sm focus:ring-3 focus:outline-hidden sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
