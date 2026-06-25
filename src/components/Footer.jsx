import Link from "next/link";
import {
  FaTicketAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030712] pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8  bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <PiNotebookBold size="20px" color="white" />
              </div>
              <span className="font-semibold text-2xl  text-white tracking-wider ">
                Fable
              </span>
            </div>
          </Link>

          {/* text section */}
          <p className="text-slate-400 text-sm leading-relaxed">
            Fable is a digital platform that connects ebook lovers, readers, and
            collectors with talented writers. The platform allows users to
            browse, discover, and read original ebooks. Writers can upload and
            manage their creations after a one-time verification payment, while
            an admin oversees the entire system.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Discover Events
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <Link
                href="/events?category=Music"
                className="hover:text-white transition-colors"
              >
                Music Festivals
              </Link>
            </li>
            <li>
              <Link
                href="/events?category=Tech"
                className="hover:text-white transition-colors"
              >
                Tech Conferences
              </Link>
            </li>
            <li>
              <Link
                href="/events?category=Sports"
                className="hover:text-white transition-colors"
              >
                Sports Matches
              </Link>
            </li>
            <li>
              <Link
                href="/events?category=Arts"
                className="hover:text-white transition-colors"
              >
                Art Exhibitions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Fable Inc. All rights reserved.
          Developed by Fable Inc.
        </p>
      </div>
    </footer>
  );
}
