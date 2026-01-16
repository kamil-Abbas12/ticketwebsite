import Image from "next/image";
import { Zap, CalendarDays, Mail } from "lucide-react";

type ReviewCard = {
  name: string;
  date: string;
  title: string;
  body: string;
  stars: number; // 0-5
};

const reviews: ReviewCard[] = [
  {
    name: "Dipender Panwar",
    date: "Dec 10, 2025",
    title: "",
    body:
      "I want to recognize the outstanding service provided by Jochim. His professionalism, attention to detail, and genuine customer care have consistently stood out. Interactions with him are always clear, patient, and solution focused. Team...",
    stars: 5,
  },
  {
    name: "Ray Hobson",
    date: "Aug 31, 2025",
    title: "Very reliable",
    body:
      "This was my first time using this site and I was very pleased with how everything was handled. Right after I booked my flight I got a call from one of the associates letting me know...",
    stars: 5,
  },
  {
    name: "MariaEsperanza Estilo",
    date: "Aug 28, 2025",
    title: "Nicke Went Above and Beyond",
    body:
      "I had to change the return flight of two out of four passengers in our group. Because only half of the group need to travel differently, it took several calls to Iberia Airlines directly and...",
    stars: 5,
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <span
            key={i}
            className={filled ? "text-amber-400" : "text-slate-200"}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

function RatingBlock({
  brand,
  headline,
  subline,
}: {
  brand: "sitejabber" | "trustpilot";
  headline: string;
  subline: string;
}) {
  const isJab = brand === "sitejabber";

  return (
    <div className="flex flex-col gap-2">
      {/* Brand row: icon + brand name */}
      <div className="flex flex-col items-center gap-2">
        {isJab ? (
          <Image
            src="/jab.jpg"
            alt="Sitejabber"
            width={100}
            height={36}
            className="rounded-sm"
          />
        ) : (
          <Image
            src="/trust.jpg"
            alt="Trustpilot"
            width={100}
            height={36}
            className="rounded-sm"
          />
        )}

        {/* <span className="text-sm font-semibold text-slate-700">
          {isJab ? "sitejabber" : "Trustpilot"}
        </span> */}
      </div>

      {/* Stars row */}
      <div className="flex  flex-col items-center gap-2">
        {/* If you want exact star counts from screenshot: Sitejabber ~4, Trustpilot ~4.1 */}
        <Stars value={isJab ? 4 : 4} />
        <span className="text-sm font-semibold text-slate-700">{headline}</span>
      </div>

      <div className="text-xs text-slate-500">{subline}</div>
    </div>
  );
}

function ReviewCard({ r }: { r: ReviewCard }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <Stars value={r.stars} />
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          <span>{r.date}</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-sm font-semibold text-slate-800">{r.name}</div>

        {r.title ? (
          <div className="mt-2 text-base font-semibold text-slate-900">
            {r.title}
          </div>
        ) : null}

        <p className="mt-2 text-sm leading-6 text-slate-600">{r.body}</p>

        <a
          href="#"
          className="mt-3 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

const Testimonial = () => {
  return (
    <section className="">
      <div className="mx-auto w-full px-4 py-10 md:px-25">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            What Our Customers Say About Our Service?
          </h1>

          {/* Ratings header block */}
          <div className="flex flex-col gap-5 rounded-lg bg-white p-6 shadow-sm  md:flex-row md:items-start md:justify-between w-full">
            <div className="flex flex-col gap-4 md:flex-row md:gap-10 justify-between items-center w-[60%]">
              <RatingBlock
                brand="sitejabber"
                headline="Excellent | 4 Stars"
                subline="Based on 233,423 reviews"
              />
              <RatingBlock
                brand="trustpilot"
                headline="Great | 4.1 Stars"
                subline="Based on 23,777 reviews"
              />
            </div>

            <div className="md:self-center">
              <button className="inline-flex items-center gap-2 rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                <Zap className="h-4 w-4" aria-hidden="true" />
                Submit A Review
              </button>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <ReviewCard key={`${r.name}-${r.date}`} r={r} />
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              See all reviews
            </a>
          </div>

          {/* App promo */}
          <div className="grid grid-cols-1 items-center gap-6 rounded-lg bg-white   ring-1 ring-slate-200 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="w-full justify-between items-center flex flex-row">
<div className="w-1/2 object-cover ">
<img src="/ban.jpg" alt=" bos" />
</div>

              <div className="flex flex-col w-1/2 gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Earn up to 6X points on CheapOair app
                </h2>
                <div className="text-sm text-slate-600">
                  Book on our apps (iOS &amp; Android).
                </div>

                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Get notified when prices drop for trips you are planning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Change or cancel your flights on the go!</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span>Get flight alerts and updates for your trips</span>
                  </li>
                </ul>
              </div>
                            </div>

            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative h-40 w-40 rounded-md border border-slate-200 bg-white">
                <Image
                  src="/qrc.png"
                  alt="QR code"
                  fill
                  className="object-contain p-3"
                  sizes="160px"
                  priority={false}
                />
              </div>
              <div className="text-xs text-slate-500">Scan QR and install</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-slate-700" aria-hidden="true" />
              <div className="text-lg font-semibold text-slate-900">
                Sign up today and never miss{" "}
                <br className="hidden md:block" />
                another deal again!
              </div>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-2 md:flex-row md:items-center md:justify-end">
              <input
                type="email"
                placeholder="Get CheapOair Emails"
                className="h-11 w-full rounded-md border border-slate-300 bg-white px-4 text-sm outline-none ring-blue-200 focus:ring-4"
              />
              <button className="h-11 rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
                Sign Up
              </button>

              <p className="text-[11px] leading-4 text-slate-500 md:ml-2 md:max-w-sm">
                By entering your email address, you agree to CheapOair&apos;s{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and to receive email marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
