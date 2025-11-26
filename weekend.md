# THIS WEEKEND: Your Action Plan

## 🎯 Goal: Get Your New Site Live by Sunday

---

## ✅ STEP 1: Archive Old Repos (15 minutes)

1. Go to each of your GitHub repos
2. Click "Settings" (bottom of page)
3. Scroll all the way down
4. Click "Archive this repository"
5. Confirm

**Which repos to archive:**
- SpecterX
- ReconWarden
- Any other AI-generated "tools"

**Keep visible:**
- Your notes app (if you actually use it)
- Any simple scripts you wrote yourself

**Create a new repo called "archived-learning"** and add a README explaining:
> "These were learning exercises built with AI assistance. Archived while I learn to code for real. See my journey at [your-site-url]"

---

## ✅ STEP 2: Deploy New Site (30 minutes)

### 2A: Create GitHub Repo

1. Go to github.com/new
2. Name: `toxictager.github.io` (your username + .github.io)
3. Public repository
4. Do NOT add README, .gitignore, or license
5. Click "Create repository"

### 2B: Upload Files

**Using Git (Recommended):**

```bash
# Navigate to where you downloaded the files
cd /path/to/downloaded/files

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "New honest portfolio - starting from scratch"

# Connect to GitHub
git remote add origin https://github.com/toxictager/toxictager.github.io.git

# Push
git branch -M main
git push -u origin main
```

**OR using GitHub website:**
1. On your new repo page, click "uploading an existing file"
2. Drag ALL files from the downloaded folder
3. Commit changes

### 2C: Enable GitHub Pages

1. Repo Settings → Pages
2. Source: "main" branch
3. Save
4. Wait 3 minutes
5. Visit: `https://toxictager.github.io`

---

## ✅ STEP 3: Start Learning (1-2 hours)

### Saturday Morning (1 hour):

1. **Go to CS50P:** https://cs50.harvard.edu/python
2. **Watch Week 0 lecture** (or at least the first 30 minutes)
3. **Take notes** - write down anything confusing

### Saturday Afternoon (1 hour):

4. **Do the first problem set** (even if you don't finish)
5. **Create a GitHub repo** called "cs50p-solutions"
6. **Commit your attempt** (even if it doesn't work)

```bash
# In your problem set folder
git init
git add .
git commit -m "Week 0 attempt"
git remote add origin https://github.com/toxictager/cs50p-solutions.git
git push -u origin main
```

### Sunday (1 hour):

7. **Practice Git commands** using the GIT-GUIDE.md file
8. **Test your site locally** - open index.html in your browser
9. **Make one small change** to personalize it (change a color, add a sentence)
10. **Push the change to see if GitHub Pages updates**

---

## ✅ STEP 4: Prepare for Friday Post (30 minutes)

### Sunday Evening:

1. **Copy BLOG-POST-TEMPLATE.md**
2. **Rename it:** `week-1-complete.md`
3. **Start filling it in** with what you learned this weekend
4. **Don't worry about perfection** - just be honest

You'll finish it and post it Friday.

---

## 📋 Complete Weekend Checklist

- [ ] Archive all AI-generated repos
- [ ] Create new `toxictager.github.io` repository
- [ ] Upload new site files
- [ ] Enable GitHub Pages
- [ ] Verify site is live at toxictager.github.io
- [ ] Sign up for CS50P on edX (free)
- [ ] Watch Week 0 lecture (at least 30 min)
- [ ] Attempt first problem set
- [ ] Create cs50p-solutions repo
- [ ] Commit your work (even if incomplete)
- [ ] Start drafting Week 1 blog post
- [ ] Update your LinkedIn with new site URL
- [ ] Test Git commands from GIT-GUIDE.md

---

## 🚨 Common Issues You Might Face

### "I don't understand the CS50 lecture"

**Normal.** Watch it at 0.75x speed. Pause and rewind. Take notes. It's supposed to be challenging.

### "My code doesn't work"

**Good.** That means you're actually coding. Read the error message. Google it. Ask in r/learnprogramming.

### "This is taking way longer than expected"

**Welcome to programming.** Everything takes 3x longer than you think. That's normal.

### "I want to use AI to help"

**Don't.** Not yet. Struggle through it. The struggle IS the learning.

---

## 💪 Mindset for the Weekend

**This will be frustrating.** You'll want to quit. You'll think "maybe I'm not cut out for this." You'll be tempted to open ChatGPT.

**Don't.**

Every developer has been exactly where you are right now. The difference between them and people who gave up is they kept going through the frustration.

You have 26 weeks until university. Week 1 is the hardest because you're breaking old habits.

**By Sunday night, you should:**
- Have a live, honest portfolio
- Have attempted (not necessarily completed) your first real coding challenge
- Have committed code you wrote yourself to GitHub

That's it. That's the bar for Week 1.

---

## 📞 If You Get Stuck

1. **Read the error message** - it's telling you what's wrong
2. **Google the error** - someone has had it before
3. **Check CS50's Discord** - https://discord.gg/cs50
4. **Ask in r/learnprogramming** - be specific about what you tried
5. **Check the GIT-GUIDE.md** for Git issues

**DO NOT:**
- Ask AI to write your code
- Copy solutions from GitHub
- Give up after 10 minutes

---

## 🎯 Success Metrics for Weekend

You'll know you succeeded if by Sunday night:

✅ Your new site is live and honest about where you are
✅ You've watched at least 30 minutes of CS50P
✅ You've written at least 10 lines of Python yourself
✅ You've committed code to GitHub using Git commands
✅ You're frustrated but still committed

---

## 🔥 One Last Thing

Take a screenshot of your old portfolio before you take it down.

Six months from now, when you've actually learned to code, you're going to look back at this moment and be proud you had the courage to start over.

**Let's go. This weekend is Day 1.**

---

*Good luck. You're going to need it. But you're also going to make it. 🚀*