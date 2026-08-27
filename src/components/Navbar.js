import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* Aligns elements horizontally, places logo on left, menu on right */}
      <nav className="flex flex-row p-5">
        <div className="basis-1/3 flex items-center">Logo</div>
        <div className="basis-2/3 flex flex-row-reverse flex-nowrap gap-6">
          {/* Next.js maps these paths directly to your folders */}
          <ul className="flex items-center gap-6">...</ul>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
        </div>
      </nav>
    </div>
  );
}
