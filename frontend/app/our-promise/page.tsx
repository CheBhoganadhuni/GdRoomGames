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

        <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-2xl p-6 mt-4 text-center">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">Questions or concerns?</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            This is a small student-run project built by one developer. Reach out directly
            on WhatsApp, no bots, no support ticket.
          </p>
          <a
            href="https://wa.me/917075687685?text=Hi!%20I%20have%20a%20question%20about%20OpenSpades%20%F0%9F%83%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-full px-5 py-2.5 transition-colors"
          >
            <svg viewBox="0 0 32 32" width="20" height="20" fill="#25D366" aria-hidden="true">
              <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.352.615 4.646 1.783 6.665L2.667 29.333l6.83-1.76a13.27 13.27 0 0 0 6.507 1.76h.006c7.364 0 13.333-5.97 13.333-13.333s-5.975-13.333-13.339-13.333zm0 24.4a11.04 11.04 0 0 1-5.63-1.541l-.404-.24-4.053 1.045 1.083-3.953-.264-.406a11.03 11.03 0 0 1-1.7-5.892c0-6.106 4.966-11.072 11.074-11.072 2.958 0 5.738 1.153 7.83 3.246a11 11 0 0 1 3.24 7.834c0 6.107-4.965 11.073-11.076 11.073v-.094zm6.074-8.294c-.333-.167-1.968-.973-2.273-1.083-.305-.11-.527-.166-.75.167-.222.333-.86 1.083-1.055 1.305-.194.222-.388.25-.72.083-.333-.167-1.406-.518-2.678-1.652-.99-.884-1.66-1.977-1.854-2.31-.194-.333-.02-.513.146-.68.15-.15.333-.389.5-.583.166-.194.222-.333.333-.556.11-.222.055-.417-.028-.583-.083-.167-.75-1.807-1.028-2.474-.27-.65-.545-.562-.75-.573-.194-.01-.417-.012-.639-.012-.222 0-.583.083-.888.417-.305.333-1.166 1.139-1.166 2.778 0 1.639 1.194 3.222 1.361 3.444.166.222 2.351 3.59 5.695 5.035.796.343 1.417.548 1.901.702.799.254 1.526.218 2.101.132.641-.096 1.968-.804 2.245-1.582.278-.777.278-1.444.194-1.583-.083-.139-.305-.222-.638-.389z" />
            </svg>
            <span className="text-emerald-300 font-semibold text-sm">WhatsApp: @CheBhoganadhuni</span>
          </a>
        </div>

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
