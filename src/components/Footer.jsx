import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            Discover Ebooks
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <Link
                href="/books?category=Fiction"
                className="hover:text-cyan-400 transition-colors"
              >
                Fiction & Stories
              </Link>
            </li>
            <li>
              <Link
                href="/books?category=Tech"
                className="hover:text-cyan-400 transition-colors"
              >
                Tech & Programming
              </Link>
            </li>
            <li>
              <Link
                href="/books?category=History"
                className="hover:text-cyan-400 transition-colors"
              >
                History & Biography
              </Link>
            </li>
            <li>
              <Link
                href="/books?category=Poetry"
                className="hover:text-cyan-400 transition-colors"
              >
                Poetry & Literature
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
            Company
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        {/* right side */}
        <div className="space-y-4 sm:col-span-1 md:col-span-2 flex flex-col md:items-end md:text-right">
          <div className="w-full flex flex-col md:items-end gap-3">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <PiNotebookBold size="20px" color="white" />
              </div>
              <span className="font-semibold text-2xl text-white tracking-wider">
                Fable
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm md:ml-auto">
              A premium digital platform connecting passionate ebook lovers and
              collectors directly with talented global writers.
            </p>
          </div>

          <div className="flex gap-4 text-slate-400 pt-2">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Fable Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
