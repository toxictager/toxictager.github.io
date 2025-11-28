# Week 1: Three Days, 2.5 Hours

**November 29, 2024** | Week 1 of 26

---

I started on Wednesday, November 27th. Three days in, and here's the truth: I coded for 2.5 hours this week.

Not the full 10 I committed to, but I'm posting anyway. This blog is about honesty, not performance.

## What I Did

**Wednesday (45 minutes):**
- Watched first half of CS50P Week 0 lecture
- Coded along with the professor
- Took notes on functions, arguments, variables, string methods

**Thursday (1 hour 15 minutes):**
- Finished Week 0 lecture, coded along
- Completed Indoor Voice problem
- Created cs50p-solutions GitHub repo: [github.com/toxictager/learning](https://github.com/toxictager/learning)
- Made my first commit

**Friday (30 minutes):**
- Playback Speed (learned `.replace()`)
- Making Faces (debugged `.find()` bug)
- Einstein (E=mc²)
- Tip Calculator (struggled with `def` functions)

**Total: 2.5 hours** (out of 10-hour commitment for a full week)

Since this was only 3 days, not a full week, I should've aimed for ~4-5 hours. Fell short.

## What I Learned

**Technical concepts:**
- `.lower()`, `.strip()`, `.title()` for string manipulation
- `.replace(old, new)` for substitution  
- Difference between `print(name)` and `print("name")`
- How `def` creates functions
- String methods vs variables

**Real lesson:** It's easy to say "I'll do it later" and then not do it.

## What Was Hard

**Understanding `def` and functions.**

The tip calculator problem confused me. I had to get help understanding that functions:
1. Take input (parameters)
2. Do something with it
3. Return a result

For `dollars_to_float()`:
- Remove the `$` symbol
- Convert to float
- Return the number

It clicked eventually, but took longer than I expected.

## Problems Completed

All solutions: [github.com/toxictager/learning](https://github.com/toxictager/learning)

1. Indoor Voice ✓
2. Playback Speed ✓
3. Making Faces ✓ (debugged `.find()` logic error)
4. Einstein ✓
5. Tip Calculator ✓

**5 problems in 3 days.** Progress is progress.

## Bugs I Hit

**Making Faces - the `.find()` trap:**

I wrote:
```python
if text.find(":)"):
    # replace :)
elif text.find(":("):
    # replace :(
```

Problem: `.find()` returns the index (position), or `-1` if not found. When `:)` was at position 0, the `if` evaluated to `False` because `0` is falsy in Python.

**Fix:** Use `.replace()` directly instead of checking with `if`:
```python
text = text.replace(":)", "🙂")
text = text.replace(":(", "🙁")
```

Simpler and handles both emoticons in one input.

## The Temptation

Yes. I was tempted to use AI multiple times.

Especially on the tip calculator when I was stuck. Would've been easy to ask ChatGPT "write me a function that converts $50.00 to 50.0"

I didn't. But the temptation was real.

## What I Need to Fix

**I'm not prioritizing this enough.**

2.5 hours in 3 days isn't terrible for a partial week, but I need to build the habit of coding FIRST, not "when I have time."

If I keep finding excuses, I won't hit 10 hours in a full week. And if I can't do 10 hours, I won't be ready for university in May.

## Next Week's Plan

**Week 2 (Dec 2-8) is my first FULL week.**

Monday-Sunday. No "partial week" excuses.

**Goals:**
- Hit the FULL 10 hours (1 hour daily + 2.5 hours weekend)
- Finish CS50P Week 0 completely  
- Start Week 1 of CS50P
- Post on time next Friday

**How I'll actually do it:**
- Code FIRST after school (before I find excuses)
- Set a timer and track hours honestly
- Write down what I did each day

## Why I'm Posting This

I only hit 25% of my goal for a partial week. That's not great.

But the point of this blog is honesty. If I only post when I'm crushing it, it's not real.

Week 2 starts Monday. Full week. 10 hours. Let's see if I can actually do it.

---

**Hours this week:** 2.5 hours (3 days, partial week)

**Problems completed:** 5

**Status:** Below target, need to build consistency

**Next post:** Friday, December 5 2025

---