import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          MyPortfolio
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <Link href="#" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="#" className="hover:text-blue-600">
            About
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Projects
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Hire Me
        </button>

      </div>
    </header>
  );
}