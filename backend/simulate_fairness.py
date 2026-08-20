"""
Fairness simulation — proves deal_cards() is unbiased.

Simulates N games for a given player count and reports:
  - Average hand strength per seat across all games
  - Std deviation (should be near-identical across seats)
  - Best / worst hand frequency per seat

Run:  python simulate_fairness.py [num_players] [num_games] [cards_per_player]
      python simulate_fairness.py 4 10000 5
"""

import sys
import random
from collections import defaultdict

# ── same constants as models.py ────────────────────────────────────────────────
SUITS      = ["spades", "hearts", "diamonds", "clubs"]
RANKS      = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
RANK_VALUE = {r: i for i, r in enumerate(RANKS)}   # 2=0 … A=12


# ── exact same functions as engine.py ──────────────────────────────────────────
def build_deck(num_decks=1):
    deck = []
    for deck_id in range(1, num_decks + 1):
        for suit in SUITS:
            for rank in RANKS:
                deck.append({"suit": suit, "rank": rank, "deck_id": deck_id})
    random.shuffle(deck)
    return deck


def deal_cards(num_players, cards_per_player, num_decks=1):
    deck = build_deck(num_decks)
    trump_card = random.choice(deck)
    deck.remove(trump_card)
    hands = [[] for _ in range(num_players)]
    for i in range(cards_per_player * num_players):
        hands[i % num_players].append(deck[i])
    return hands, trump_card


def hand_strength(hand):
    """Sum of card values in hand (2=0 … A=12). Higher = better."""
    return sum(RANK_VALUE[c["rank"]] for c in hand)


def trump_count(hand, trump_suit):
    return sum(1 for c in hand if c["suit"] == trump_suit)


# ── simulation ─────────────────────────────────────────────────────────────────
def run(num_players=4, num_games=100_000, cards_per_player=5, num_decks=1):
    strengths   = defaultdict(list)   # seat -> [strength, ...]
    trump_counts = defaultdict(list)  # seat -> [trump_count, ...]
    best_hand   = defaultdict(int)    # seat -> times had the best hand
    worst_hand  = defaultdict(int)    # seat -> times had the worst hand

    for _ in range(num_games):
        hands, trump_card = deal_cards(num_players, cards_per_player, num_decks)
        trump_suit = trump_card["suit"]

        hand_vals = [hand_strength(h) for h in hands]
        best_seat  = hand_vals.index(max(hand_vals))
        worst_seat = hand_vals.index(min(hand_vals))

        for seat, hand in enumerate(hands):
            strengths[seat].append(hand_vals[seat])
            trump_counts[seat].append(trump_count(hand, trump_suit))
        best_hand[best_seat]  += 1
        worst_hand[worst_seat] += 1

    # ── results ────────────────────────────────────────────────────────────────
    print(f"\n{'─'*60}")
    print(f"  Fairness simulation — {num_players} players, "
          f"{cards_per_player} cards/round, {num_games:,} games")
    print(f"{'─'*60}")

    def mean(lst):  return sum(lst) / len(lst)
    def std(lst):
        m = mean(lst)
        return (sum((x - m) ** 2 for x in lst) / len(lst)) ** 0.5

    print(f"\n{'Seat':>5}  {'Avg strength':>13}  {'Std dev':>8}  "
          f"{'Avg trumps':>11}  {'Best hand%':>11}  {'Worst hand%':>12}")
    print("  " + "·" * 58)

    for seat in range(num_players):
        avg_s  = mean(strengths[seat])
        sd_s   = std(strengths[seat])
        avg_t  = mean(trump_counts[seat])
        best_p = 100 * best_hand[seat]  / num_games
        worst_p= 100 * worst_hand[seat] / num_games

        print(f"  #{seat+1:>2}   {avg_s:>13.3f}  {sd_s:>8.3f}  "
              f"{avg_t:>11.3f}  {best_p:>10.2f}%  {worst_p:>11.2f}%")

    # Overall variance across seat averages
    seat_avgs = [mean(strengths[s]) for s in range(num_players)]
    spread = max(seat_avgs) - min(seat_avgs)
    expected_best = 100 / num_players

    print(f"\n  Max spread across seats : {spread:.3f}  "
          f"(< 0.5 = fair, > 1.0 = suspicious)")
    print(f"  Expected best-hand rate : {expected_best:.1f}% per seat  "
          f"(ties split randomly)")
    print(f"\n  Verdict: {'✅ FAIR — all seats within noise' if spread < 0.5 else '⚠️  Spread larger than expected — investigate'}")
    print(f"{'─'*60}\n")


if __name__ == "__main__":
    args = sys.argv[1:]
    players     = int(args[0]) if len(args) > 0 else 4
    games       = int(args[1]) if len(args) > 1 else 100_000
    cards       = int(args[2]) if len(args) > 2 else 5
    decks       = int(args[3]) if len(args) > 3 else 1

    run(players, games, cards, decks)
