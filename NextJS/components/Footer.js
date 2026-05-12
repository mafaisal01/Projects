import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 font-work leading-[5] border-t mt-10 pt-4">
      <div>© {new Date().getFullYear()} Logo</div>

      <nav>
        <ul className="flex gap-4 justify-end">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/clientcomp">ClientComp</Link>
          </li>
          <li>
            <Link href="/servercomp">ServerComp</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}