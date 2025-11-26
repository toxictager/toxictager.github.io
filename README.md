# Loui Levy - Learning Journey Portfolio

## 🎯 What This Is

An honest portfolio documenting my journey from AI-dependent to actual developer. No fake projects, no shortcuts - just real learning documented publicly.

---

## 📁 File Structure

```
├── index.html              # Homepage with progress tracker
├── learning-log.html       # Blog posts page
├── about.html              # Your real story
├── resources.html          # Learning resources and tools
├── styles.css              # Dark theme styling
├── script.js               # Minimal JavaScript
├── posts/                  # Blog posts folder
│   └── week-1-starting-over.md
└── README.md              # This file
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create New Repository

1. Go to GitHub.com
2. Click "New Repository"
3. Name it: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make it **Public**
5. Do NOT initialize with README
6. Click "Create Repository"

### Step 2: Upload Files

**Option A: Using Git (Recommended)**

```bash
# Navigate to the folder where you downloaded these files
cd path/to/your/website/files

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - honest portfolio"

# Connect to your GitHub repo
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Go to your new repository
2. Click "uploading an existing file"
3. Drag and drop ALL files from this folder
4. Commit the changes

### Step 3: Enable GitHub Pages

1. Go to your repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes
6. Your site will be live at: `https://yourusername.github.io`

---

## 📝 How to Add Weekly Blog Posts

Every Friday, follow these steps:

### 1. Create New Blog Post

1. Create a new file in the `posts/` folder
2. Name it: `week-X-title.md` (e.g., `week-2-python-basics.md`)
3. Write your post in Markdown format

**Template:**

```markdown
# Week X: Title of Your Post

**Date** | Week X of 26

---

## What I Learned

[Write about what you learned this week]

## What I Struggled With

[Be honest about difficulties]

## What I Built

[Any code or projects you worked on]

## Next Week's Goals

[What you're planning to focus on]

---

**Hours this week:** X/10
```

### 2. Update script.js

Open `script.js` and add your new post to the top of the `blogPosts` array:

```javascript
const blogPosts = [
    'week-2-python-basics.md',     // NEW POST (add to top)
    'week-1-starting-over.md'
    // Older posts below
];
```

### 3. Update Progress Tracker

In `index.html`, update these numbers:

- Line with `Week 1/26` → change to current week
- Line with `style="width: 4%;"` → calculate (current_week / 26 * 100)%
- Line with `4% Complete (Week 1 of 26)` → update percentage and week

**Quick calculation:** If you're on Week 2, width should be `8%` (2/26 * 100)

### 4. Update Hours Tracker (Optional)

In `script.js`, update the `currentWeekData` object:

```javascript
const currentWeekData = {
    week: 2,        // Current week number
    hours: 7,       // Hours completed this week
    target: 10      // Keep at 10
};
```

### 5. Push to GitHub

```bash
git add .
git commit -m "Week X update"
git push
```

Wait 2-3 minutes for GitHub Pages to update.

---

## 🎨 Customization Tips

### Changing Colors

Edit `styles.css` root variables (lines 10-18):

```css
:root {
    --accent-primary: #00ff88;  /* Change this for different accent color */
    --accent-hover: #00cc6a;    /* Slightly darker version */
}
```

### Updating Progress Milestones

In `index.html`, find the "Progress Tracker" section and update the milestones to match your goals.

### Updating Personal Info

- **Email:** Find all instances of `louilevy1@gmail.com` and replace
- **GitHub:** Find all instances of `toxictager` and replace with your username
- **LinkedIn:** Update the LinkedIn profile URL

---

## ✅ Weekly Checklist

Every Friday before posting:

- [ ] Write new blog post in `posts/` folder
- [ ] Add post filename to top of `blogPosts` array in `script.js`
- [ ] Update week number in `index.html` progress tracker
- [ ] Update progress bar width percentage
- [ ] Update hours worked in `script.js` (optional)
- [ ] Commit and push to GitHub
- [ ] Wait 2-3 minutes and check live site

---

## 🐛 Common Issues

**Blog post not showing up?**
- Check that the filename is added to `script.js` blogPosts array
- Make sure the file is in the `posts/` folder
- Check browser console (F12) for errors

**Site not updating?**
- GitHub Pages takes 2-3 minutes to update
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for deployment status

**Broken links?**
- All internal links should be relative (e.g., `about.html` not `/about.html`)
- External links need `https://`

---

## 📊 Your Commitment

- **10 hours/week** coding (1 hour daily + 2.5 hours weekends)
- **Weekly blog posts** every Friday
- **No AI code generation** for 3 months minimum
- **Public accountability** - everything documented

---

## 🎯 6-Month Roadmap

**Months 1-2 (Weeks 1-8):**
- CS50P completion
- Python fundamentals
- First CLI tool

**Months 3-4 (Weeks 9-16):**
- 3-5 real projects
- Problem-solving practice
- Git/GitHub mastery

**Months 5-6 (Weeks 17-26):**
- Security fundamentals
- PicoCTF challenges
- OverTheWire: Bandit
- University preparation

---

## 📞 Need Help?

- **Issues with the site:** Check browser console (F12)
- **Git problems:** [GitHub Docs](https://docs.github.com)
- **Learning resources:** See `resources.html` on your site

---

## 🔥 Important Reminders

1. **Archive your old repos** - Move AI-generated projects to a private archive
2. **Be consistent** - It's better to code 1 hour daily than 10 hours on Sunday
3. **Document failures** - They're more valuable than successes
4. **Ask for help** - Communities exist for this (r/learnprogramming, Python Discord)
5. **Stay honest** - The whole point is authenticity

---

## 📅 Timeline to University

**Start Date:** November 29, 2024
**University Starts:** May 2026
**Weeks Available:** 26

You have 6 months. Make them count.

---

Built without AI. Updated every Friday.

Good luck. You're going to need it. 🚀