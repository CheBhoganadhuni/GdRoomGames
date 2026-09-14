import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Promise | OpenSpades",
  description:
    "OpenSpades is a free student project. No real money is ever involved, now or in the future.",
};

export default function OurPromise() {
  return (
    <div className="table-bg min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🛡️</div>
          <h1 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
            Our Promise
          </h1>
          <p className="text-gray-400 mt-2">
            Why OpenSpades exists, and what it will never become
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0">🎓</div>
              <div>
                <h2 className="text-yellow-300 font-bold text-lg mb-2">
                  A student project, built for our batch
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our hostel batch plays this card game constantly, and we kept running out
                  of decks (or losing cards). So a few of us built OpenSpades to fix that:
                  play from any phone, no physical cards needed. It started as a hostel
                  project and we&apos;re sharing it with other batches who&apos;d enjoy it too.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950/60 backdrop-blur border border-emerald-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0">🚫</div>
              <div>
                <h2 className="text-emerald-300 font-bold text-lg mb-2">
                  No real money. Ever.
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  OpenSpades is completely free and will always stay that way. There is no
                  wallet, no deposits, no withdrawals, and no cash prizes. Today, tomorrow,
                  or in any future update, this site will never ask you to pay to play or
                  pay to win.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-950/40 backdrop-blur border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl shrink-0">⚠️</div>
              <div>
                <h2 className="text-amber-300 font-bold text-lg mb-2">
                  A quick word on online betting
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Plenty of apps dress up real-money gambling as a &quot;skill game&quot;
                  using rummy, poker, or card games like this one. Please be careful with
                  those; real money goes in, and real money can be lost. OpenSpades has no
                  such mode, no entry fees, and no payouts of any kind. If a card game site
                  ever asks you to add cash to play, that is not what this is.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-xs text-center mt-8">
          Questions or concerns? This is a small student-run project, so feel free to reach
          out to whoever shared the link with you.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold py-3 px-8 rounded-xl text-lg transition-all shadow-lg shadow-yellow-400/20"
          >
            Back to OpenSpades
          </Link>
        </div>
      </div>
    </div>
  );
}
