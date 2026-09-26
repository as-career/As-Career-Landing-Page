import Link from "next/link";
import { BadgeCheck, Globe, Mail, MapPin, Phone, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#0e1b30] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <h3 className="text-2xl font-semibold text-white">AS Career Consultancy</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Empowering careers through technology, training, and industry-driven excellence.
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe, BadgeCheck, Send].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:border-[#c8972b] hover:text-[#c8972b]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/placements" className="hover:text-white">
                Placements
              </Link>
            </li>
            <li>
              <Link href="/tieups" className="hover:text-white">
                Tie-Ups
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 88673 75152
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> ascareerconsultancy@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Belagavi, Karnataka
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8972b]">
            Stay Updated
          </h4>
          <p className="mt-4 text-sm text-slate-300">
            Get notified about new batches, placements, and career
            opportunities.
          </p>
          <form className="mt-4 flex flex-col gap-3">
            <input
              className="rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400"
              placeholder="Email address"
            />
            <button className="rounded-full bg-[#c8972b] px-4 py-3 text-sm font-semibold text-[#0e1b30]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
