import { FaTelegram, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGlobe } from "react-icons/fa";

const footerLinks = [
  {
    title: "ABOUT ME",
    links: [
      { name: "Profile", url: "#" },
      { name: "Projects", url: "#" },
      { name: "Resume", url: "#" },
      { name: "Skills", url: "#" },
    ],
  },
  {
    title: "WORK WITH ME",
    links: [
      { name: "Freelance", url: "#" },
      { name: "Partnership", url: "#" },
      { name: "Consulting", url: "#" },
      { name: "Open Source", url: "#" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { name: "Email", url: "mailto:abenezerkifle000@gmail.com" },
      { name: "Phone", url: "tel:+251910979060" },
      { name: "LinkedIn", url: "https://linkedin.com/in/abenezer-kifle" },
      { name: "Location", url: "#" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { name: "FAQ", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <FaTelegram />, url: "#" },
  { icon: <FaFacebook />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/abenezer-kifle" },
  { icon: <FaYoutube />, url: "#" },
  { icon: <FaGlobe />, url: "https://codexafrica.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 pt-0">
      {/* SVG Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path
            d="M0 0V120H1920V0C1600 80 1280 80 960 0C640 80 320 80 0 0Z"
            fill="#181818"
          />
        </svg>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="font-bold mb-3 text-yellow-400 underline">{section.title}</div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="hover:text-white transition-colors"
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Social and Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="text-yellow-400 hover:text-white text-2xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            Addis Ababa, Ethiopia &middot; <a href="mailto:abenezerkifle000@gmail.com" className="underline hover:text-yellow-400">abenezerkifle000@gmail.com</a> <br />
            Phone: <a href="tel:+251910979060" className="underline hover:text-yellow-400">+251910979060</a>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Abenezer Kifle. Inspired by <a href="https://combanketh.et/" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Commercial Bank of Ethiopia</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;