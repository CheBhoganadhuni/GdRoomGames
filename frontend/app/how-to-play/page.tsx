import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Play Spades | OpenSpades",
  description:
    "Learn Spades in 2 minutes: bidding, trump, tricks, and scoring, then jump into a game.",
};

const STEPS = [
  {
    heading: "1. Each round, everyone gets dealt cards",
    body:
      "Round 1 deals 1 card each, round 2 deals 2, and so on: the hand grows every round. A random trump suit (usually spades) is picked for the round.",
  },
  {
    heading: "2. Bid how many tricks you'll win",
    body:
      "Before play starts, every player bids a number: a guess at how many tricks (rounds of cards) they'll win this hand. Bid 0 if you think you'll win none.",
  },
  {
    heading: "3. Play a card each turn",
    body:
      "Going clockwise, everyone plays one card. You must follow the suit that was led if you can. If you can't, you may play trump or any other card. Highest trump wins the trick; if no trump was played, the highest card of the led suit wins.",
  },
  {
    heading: "4. Score based on your bid",
    body:
      "Hit your bid exactly (or more) and you score 10 × bid, plus 1 point per extra trick you won. Fall short and you lose 10 points per trick you were short. Bid 0 and succeed (win nothing) for a +10 bonus.",
  },
  {
    heading: "5. Highest total after the last round wins",
    body:
      "Play solo or in teams (partners' scores are combined). After the final round, whoever (or whichever team) has the highest score wins.",
  },
];

export default function HowToPlay() {
  return (
    <div className="table-bg min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
            ♠ How to Play
          </h1>
          <p className="text-gray-400 mt-2">Spades, explained in five steps</p>
        </div>

        <div className="flex flex-col gap-4">
          {STEPS.map((s) => (
            <div
              key={s.heading}
              className="bg-gray-900/92 backdrop-blur border border-white/10 rounded-2xl p-6"
            >
              <h2 className="text-yellow-300 font-bold text-lg mb-2">{s.heading}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/92 backdrop-blur border border-white/10 rounded-2xl p-6 mt-4">
          <h2 className="text-yellow-300 font-bold text-lg mb-2">Playing together</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            One person creates a room and shares the room code (or the link) with friends.
            Everyone else joins with that code, no signup, no app install. There&apos;s
            in-game voice chat too, so you can talk trash while you play.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-extrabold py-3 px-8 rounded-xl text-lg transition-all shadow-lg shadow-yellow-400/20"
          >
            Let&apos;s Play →
          </Link>
        </div>
      </div>
    </div>
  );
}
