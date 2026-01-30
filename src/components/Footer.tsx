import { Link } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { useScrollReveal } from '../hooks/useScrollReveal';
import JoinTheMovement from "./JoinTheMovement";
const logo = "/assets/footer-logo.png";

const Footer = () => {
  const joinSection = useScrollReveal();
  const footerSection = useScrollReveal();

  return (
    <footer className="relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/footerbg.jpg)" }}
      />

      {/* SOFT TOP FADE */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-black/40" /> */}
      {/* <JoinTheMovement /> */}
      {/* ================= JOIN THE MOVEMENT CARD ================= */}
      <div
        ref={joinSection.ref as any}
        className="relative z-10 pt-28 pb-40 flex justify-center"
      >
        <div className="w-full max-w-5xl px-6">
          <div
            className={`
              bg-white
              rounded-[36px]
              px-10 py-14
              md:px-20 md:py-16
              text-center
              shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              transition-all duration-700
              ${joinSection.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
            `}
          >
            <h2 className="text-[#FF8A1F] text-4xl md:text-5xl font-bold mb-6">
              Join the Movement
            </h2>

            <p className="text-gray-800 text-xl max-w-4xl mx-auto leading-relaxed mb-10 font-medium">
              Natural Farming is India's path towards: Healthy farmers, Safe food,
              Sustainable agriculture, A stronger nation.
              <br />
              Join us in building a Natural Farming future.
            </p>

            <button
              className="
                bg-[#FF8A1F]
                hover:bg-[#e67912]
                text-white
                px-14 py-4 md:mb-6
                rounded-full
                font-semibold
                text-base
                btn-premium
                hover:shadow-lg
              "
            >
              Farmer Registration
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER LINKS SECTION ================= */}
      <div
        ref={footerSection.ref as any}
        className="relative z-10 pb-6"
      >
        <div className="max-w-7xl mx-auto px-8">

          <div className={`grid grid-cols-1 md:grid-cols-5 gap-10 text-white transition-all duration-700 ${footerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>

            {/* LOGO */}
            <div className="flex justify-center md:justify-start">
              <div className="text-center md:text-left">
                <img src={logo} alt="NMNFS" className="w-36 mx-auto md:mx-0 mb-4 transition-transform hover:scale-105 duration-300" />
              </div>
            </div>

            {/* NAVIGATION */}
            <FooterCol
              title="Navigation"
              items={[
                { label: "Home", to: "/" },
                { label: "Natural Farming", to: "/natural-farming" },
                { label: "Principles & Techniques", to: "/principles-techniques" },
                { label: "Crops & Practices", to: "/crops-practices" },
                { label: "Resources & Learning", to: "/resources-learning" },
                { label: "News & Workshops", to: "/workshops" },
              ]}
              delay="100ms"
              isVisible={footerSection.isVisible}
            />


            {/* COMMUNITY */}
            <FooterCol
              title="Community"
              items={[
                { label: "Farmers", to: "/farmers" },
                { label: "Consumers", to: "/consumers" },
                { label: "Environment", to: "/environment" },
                { label: "Contact Us", to: "/contact" },
                { label: "Feedback", to: "/feedback" },
              ]}
              delay="200ms"
              isVisible={footerSection.isVisible}
            />


            {/* QUICK LINKS */}
            <FooterCol
              title="Quick Links"
              items={[
                { label: "Farmer Registration", to: "/register" },
                { label: "KhetiBharat.com", to: "https://khetibharat.com", external: true },
                { label: "CyanoVeda", to: "https://cyanoveda.com", external: true },
                { label: "Crennis", to: "https://crennis.com", external: true },
              ]}
              delay="300ms"
              isVisible={footerSection.isVisible}
            />

            {/* SOCIAL */}
            <div className={`transition-all duration-700 ${footerSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '400ms' }}>
              <h4 className="font-semibold mb-5">Follow Us</h4>
              <ul className="space-y-3">
                <Social icon={FaFacebook} text="Facebook" link="https://facebook.com/yourpage" />
                <Social icon={FaXTwitter} text="Twitter (X)" link="https://x.com/yourhandle" />
                <Social icon={FaLinkedinIn} text="Linked In" link="https://linkedin.com/company/yourcompany" />
                <Social icon={FaInstagram} text="Instagram" link="https://instagram.com/yourhandle" />
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT BAR ================= */}
      <div className="mt-10 relative z-10 border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-white text-sm">
          © - 2026 Natural Farming. All Rights Reserved.
          <span className="mx-1"> </span>
          <a className="hover:text-orange-400 transition-colors" href="#">
            Terms and Conditions
          </a>
          {" / "}
          <a className="hover:text-orange-400 transition-colors" href="#">
            Privacy Policy
          </a>
        </div>
      </div>

    </footer>
  );
};

const FooterCol = ({ title, items, delay, isVisible }: {
  title: string;
  items: { label: string; to: string; external?: boolean }[];
  delay: string;
  isVisible: boolean;
}) => (
  <div
    className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    style={{ transitionDelay: delay }}
  >
    <h4 className="font-semibold mb-5">{title}</h4>

    <ul className="space-y-2 text-sm text-white/90">
      {items.map((item) => (
        <li
          key={item.label}
          className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 w-fit"
        >
          {item.external ? (
            <a
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link to={item.to}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Social = ({
  icon: Icon,
  text,
  link,
}: {
  icon: React.ElementType;
  text: string;
  link: string;
}) => (
  <li>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span className="bg-white/20 p-2 rounded-full group-hover:bg-orange-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm group-hover:translate-x-2 transition-transform duration-300">
        {text}
      </span>
    </a>
  </li>
);

export default Footer;
