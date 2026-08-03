import Link from "next/link";

const sections = [
  {
    title: "Explore",
    links: [
      ["Sites", "/sites"],
      ["Artifacts", "/artifacts"],
      ["Civilizations", "/civilizations"],
      ["Museums", "/museums"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Research", "/research"],
      ["Timeline", "/timeline"],
      ["AI Assistant", "/ai"],
      ["Map", "/map"],
    ],
  },
  {
    title: "Community",
    links: [
      ["Community", "/community"],
      ["Favorites", "/favorites"],
      ["Profile", "/profile"],
      ["Dashboard", "/dashboard"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h2 className="text-3xl font-black text-emerald-400">
            Project Atlas
          </h2>

          <p className="mt-4 text-slate-300">
            Discover history through archaeology, AI and global collaboration.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 font-bold">{section.title}</h3>

            <div className="space-y-3">
              {section.links.map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-slate-300 hover:text-emerald-400"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-400">
        © 2026 Project Atlas. All Rights Reserved.
      </div>
    </footer>
  );
}