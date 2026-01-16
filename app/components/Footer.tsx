import Link from "next/link";

type FooterLink = { label: string; href: string };

const footerGroups: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Quick Links",
    links: [
      { label: "Popular Airlines", href: "#" },
      { label: "Popular Flight Routes", href: "#" },
      { label: "Top U.S. Destinations", href: "#" },
      { label: "Top International Destinations", href: "#" },
    ],
  },
  {
    title: "Book",
    links: [
      { label: "Cheap Flights", href: "#" },
      { label: "Cheap Hotels", href: "#" },
      { label: "Car Rentals", href: "#" },
      { label: "Vacation Packages", href: "#" },
      { label: "Group Travel", href: "#" },
      { label: "Save & Earn $", href: "#" },
    ],
  },
  {
    title: "Traveler Tools",
    links: [
      { label: "Check My Booking", href: "#" },
      { label: "Customer Support", href: "#" },
      { label: "Online Check-in", href: "#" },
      { label: "Airline Baggage Fees", href: "#" },
      { label: "Check Flight Status", href: "#" },
      { label: "Travel Blog", href: "#" },
    ],
  },
  {
    title: "About Cheapoair",
    links: [
      { label: "About Us", href: "#" },
      { label: "Press Room", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Client Testimonial", href: "#" },
      { label: "Advertise with Us", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Price Match Promise", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Taxes & Fees", href: "#" },
      { label: "Our Service Fees", href: "#" },
      { label: "Post-Ticketing Fees", href: "#" },
      { label: "Consumer Health Data Notice", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
];

const badges = [
  { label: "IATA", src: "/iata.jpg" },
//   { label: "ARC", src: "/arc.jpg" },
//   { label: "Norton Secured", src: "/norton.jpg" },
//   { label: "McAfee Secure", src: "/mcafee.jpg" },
//   { label: "Visa", src: "/visa.jpg" },
//   { label: "UnionPay", src: "/unionpay.jpg" },
//   { label: "Discover", src: "/discover.jpg" },
//   { label: "American Express", src: "/amex.jpg" },
//   { label: "Diners Club", src: "/diners.jpg" },
//   { label: "PayPal", src: "/paypal.jpg" },
//   { label: "Affirm", src: "/affirm.jpg" },
//     { label: "Top", src: "/top.jpg" },

//   { label: "Accrue Savings", src: "/accrue.jpg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#062b78] text-white">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-wide">Easy Access</h2>
          </div>

          <div className="flex items-center gap-3 lg:mt-0">
            <p className="text-sm font-semibold tracking-wide">Connect with Us</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <s.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <div className="mb-3 inline-flex items-center gap-2">
                <h3 className="text-sm font-semibold">{group.title}</h3>
              </div>

              <ul className="space-y-2 text-sm text-white/85">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="hover:text-white hover:underline underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Badges row */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-x-6 gap-y-4">
  {badges.map((b) => (
    <img
      key={b.label}
      src={b.src}
      alt={b.label}
      className="h-10 md:h-12 w-auto object-contain"
    />
  ))}
</div>

        </div>

        {/* Bottom legal line */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs leading-relaxed text-white/75">
          <p>
            © 2008–2026 Fareportal, Inc. All rights reserved.{" "}
            <Link href="#" className="hover:text-white hover:underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and agree to our{" "}
            <Link href="#" className="hover:text-white hover:underline underline-offset-4">
              Terms and Conditions
            </Link>
            .
          </p>
          <p className="mt-2">
            California: CST #2073456, Florida: ST37449, Hawaii: SOT#TAR-7580-0,
            Washington: WASOT #602755832 (affiliate of Travelong, Inc.)
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Icons (inline SVG) ---------------- */
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5H16.8V5.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H6.8v3h2.7v8h4z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.6L5.3 22H2l7.4-8.5L1 2h6.8l4.7 6L18.9 2zm-1.2 18h1.7L7.1 3.9H5.3L17.7 20z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.7 6.8a.7.7 0 1 1-.7-.7.7.7 0 0 1 .7.7z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M16 3c.4 2.7 2.1 4.3 4.6 4.5V10c-1.7 0-3.1-.5-4.5-1.5v6.7c0 3.4-2.7 5.8-6.1 5.8-3.1 0-5.6-2.5-5.6-5.6S6.9 9.8 10 9.8c.4 0 .8 0 1.2.1v2.8c-.4-.1-.8-.2-1.2-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.8 0 3.1-1.1 3.1-3.5V3h2.9z" />
    </svg>
  );
}
