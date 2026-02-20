import Image from "next/image";

const works = [
  {
    name: "Compute Pods",
    logo: "https://cdn.navdeep.online/logo/computepods",
    url: "https://computepods.tech",
  },
  {
    name: "Builderly",
    logo: "https://cdn.navdeep.online/logo/builderly",
    url: "https://builderly.tech",
  },
  {
    name: "Credless",
    logo: "https://cdn.navdeep.online/logo/credless",
    url: "https://credless.tech",
  },
  {
    name: "Dinge",
    logo: "https://cdn.navdeep.online/logo/dinge",
    url: "https://dinge.live",
  }
];

export default function Home() {
  return (
    <main className="bg-[#F9F9F9] text-gray-900">
      {/* ── Hero ── */}
      <section className="relative flex h-screen w-full flex-col items-center justify-center bg-[#F9F9F9]">
        <div className="relative h-[60vmin] w-[80vmin] max-h-[80vh]">
          {/* Replace /logo.png with your actual logo file placed in the /public folder */}
          <Image
            src="/logo.png"
            alt="404Navdeep Productions"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-28 sm:px-12">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-gray-400">
          About Us
        </span>
        <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          404Navdeep Productions
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-gray-600">
          <p>
            404Navdeep Productions is a group of companies that make the world a better place!
          </p>
          <p>
            Founded by Navdeep Singh(CEO and Founder) with a passion for innovation, our team brings together
            diverse talent across cloud, coding, technology and clothing.

          </p>
          <p>
            From concept to completion, we are committed to delivering work that
            exceeds expectations - because ordinary is not in our vocabulary.
          </p>
        </div>
      </section>



      {/* ── works ── */}
      <section id="works" className="bg-[#F0F0F0] px-6 py-28 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 block text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            The Companies under
          </span>
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">
            404Navdeep Production
          </h2>
          <p className="mb-16 text-center text-lg text-gray-500">
            Proudly building the worlds leading organizations.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {works.map((work) => (
              <a
                key={work.name}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-[#F9F9F9] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-12 w-12">
                  <Image
                    src={work.logo}
                    alt={`${work.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {work.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-[#F9F9F9] px-6 py-10 sm:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 404Navdeep Productions. All rights
            reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-400">
            <a
              href="#about"
              className="transition-colors hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#works"
              className="transition-colors hover:text-gray-900"
            >
              works
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
