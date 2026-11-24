# The One-Line Laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/bongekanjing/one-line-laugh-2-quiet-walrus-47/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/bongekanjing/one-line-laugh-2-quiet-walrus-47/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

## The line

> I left my gym clothes by the door as motivation, and now I step over them on the way to the fridge.

## Why it wins

**The turn is in the last two words, and it rewrites the sentence.** Read up to
"step over them" and you have a standard confession of laziness. "The fridge"
arrives and reframes the pile: it was never abandoned equipment, it is a marker
on the only route the narrator actually walks. Nothing in the sentence is
decoration — every clause is doing work that the punch then collects.

**The everyday truth needs no explaining.** Anyone who has ever optimised a
hallway for good intentions recognises the geography instantly: the clothes by
the door, the walk past them, the destination. The reader does not have to agree
with the narrator; they have to have stepped over that pile themselves.

**It is economical.** Two clauses, one image, 99 characters. "As motivation"
carries the entire intention in two words. "And now" fuses the hope and the
failure without a subordinate clause. There is no adjective asking to be
admired, and the joke is not signposted — the reveal is a place, not a pun.

**It is original.** The field of ten considered for this entry, with strengths
and weaknesses, is in `candidates.txt`. The near-misses were funnier on paper
and weaker in practice: cleaning the flat before the cleaner arrives is the best
logical loop but a well-worn skeleton; the decluttering book you can't throw
away is clever rather than lived; a book brought to a party as "a polite way of
bringing a door" is a genuine surprise but only lands on introverts and leans on
metaphor instead of plain recognition. This line is the only one that lands on a
physical memory almost every reader has.

## Running it

```sh
ENTRY_OUT=./out.txt node main.ts
```

Node 22+. The script validates the line (1–200 code points, not whitespace only,
no doubled spaces, ends on a full stop), creates the output directory, writes the
line, and prints the character count. Invalid input exits non-zero with a reason.
