# Git Quick Reference - Keep This Handy

## 🔧 One-Time Setup (Do Once)

```bash
git config --global user.name "Loui Levy"
git config --global user.email "louilevy1@gmail.com"
```

---

## 🚀 First Time Push (New Project)

```bash
# Navigate to your project folder
cd path/to/your/project

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit"

# Rename branch to main
git branch -M main

# Connect to GitHub (replace YOUR-REPO-URL)
git remote add origin https://github.com/toxictager/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

---

## 📝 Weekly Update Workflow (Every Friday)

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with message describing what you did
git commit -m "Week X update: [brief description]"

# 4. Push to GitHub
git push
```

**Example commit messages:**
- `git commit -m "Week 2 update: Python basics and first project"`
- `git commit -m "Week 3: Fixed bug in calculator script"`
- `git commit -m "Week 4: Added file organizer project"`

---

## 🔍 Useful Commands

### Check Status
```bash
git status
# Shows what files changed, what's staged, etc.
```

### View Commit History
```bash
git log
# Shows your past commits (press 'q' to exit)
```

### See What Changed
```bash
git diff
# Shows exactly what you modified (press 'q' to exit)
```

### Undo Changes (CAREFUL!)
```bash
git checkout -- filename.py
# Discards changes to a specific file (can't be undone!)
```

---

## 🆘 Common Problems & Solutions

### "Permission denied (publickey)"
**Solution:** You need to set up SSH keys or use HTTPS instead.

For HTTPS (easier):
```bash
git remote set-url origin https://github.com/toxictager/YOUR-REPO-NAME.git
```

### "fatal: remote origin already exists"
**Solution:** Remove the old remote and add new one:
```bash
git remote remove origin
git remote add origin https://github.com/toxictager/YOUR-REPO-NAME.git
```

### Forgot to commit before making new changes
**Solution:** Just commit now:
```bash
git add .
git commit -m "Describe what you did"
```

### Need to change last commit message
**Solution:**
```bash
git commit --amend -m "New commit message"
git push --force
```

---

## 📋 Weekly Checklist

Before running `git push` every Friday:

- [ ] Did you write your blog post?
- [ ] Did you update `script.js` with new post?
- [ ] Did you update progress tracker in `index.html`?
- [ ] Did you test locally (open `index.html` in browser)?
- [ ] Is your commit message descriptive?

---

## 🎯 Pro Tips

1. **Commit often** - Don't wait until Friday to commit. Commit after each meaningful change.

2. **Write clear commit messages** - Future you will thank present you.
   - ❌ Bad: `git commit -m "updates"`
   - ✅ Good: `git commit -m "Added password generator project with validation"`

3. **Check status before committing** - Always run `git status` first to see what you're committing.

4. **Use .gitignore** - Create a `.gitignore` file to exclude files you don't want on GitHub:
   ```
   __pycache__/
   *.pyc
   .env
   .vscode/
   ```

5. **Don't commit sensitive info** - Never commit passwords, API keys, or personal data.

---

## 🔗 GitHub Pages Deployment

After pushing to GitHub:
1. Wait 2-3 minutes
2. Check: `https://yourusername.github.io`
3. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## 📚 Learn More

- [GitHub Docs - Git Basics](https://docs.github.com/en/get-started/using-git)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Remember:** Git is just a tool. Don't let it intimidate you. These 5 commands will handle 90% of what you need:

1. `git add .`
2. `git commit -m "message"`
3. `git push`
4. `git status`
5. `git log`

Master these first. Everything else can come later.