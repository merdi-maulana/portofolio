import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-8 px-4">
      <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-center md:px-20">
        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-neutral-600 text-white hover:border-white transition-colors duration-200"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div>
          {/* Copyright */}
          <p className="text-white text-xs">
            © 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
