// ============================================
// AUTO-UPDATE DATES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Update "Next Friday" date
    const nextFridayElement = document.getElementById('next-friday');
    if (nextFridayElement) {
        const nextFriday = getNextFriday();
        nextFridayElement.textContent = formatDate(nextFriday);
    }
    
    // Update last updated date in footer
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new Date();
        lastUpdatedElement.textContent = formatDate(today);
    }
});

// Get next Friday
function getNextFriday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    const nextFriday = new Date(today);
    
    if (daysUntilFriday === 0 && today.getHours() >= 12) {
        // If it's Friday afternoon, show next week
        nextFriday.setDate(today.getDate() + 7);
    } else if (daysUntilFriday === 0) {
        // If it's Friday morning, show today
        nextFriday.setDate(today.getDate());
    } else {
        // Show upcoming Friday
        nextFriday.setDate(today.getDate() + daysUntilFriday);
    }
    
    return nextFriday;
}

// Format date to readable string
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACTIVE NAV LINK DETECTION
// ============================================

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// ============================================
// PROGRESS ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============================================
// LEARNING LOG - LOAD BLOG POSTS
// ============================================

// List of blog post files (newest first)
const blogPosts = [
    'week 1- im starting over.md'
    // Add new posts to the top of this array
    // Example: 'week-2-python-basics.md',
];

// Load and display blog posts
async function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;
    
    if (blogPosts.length === 0) {
        blogContainer.innerHTML = `
            <div class="blog-post">
                <h2>No posts yet</h2>
                <p>Check back this Friday for the first post!</p>
            </div>
        `;
        return;
    }
    
    for (let i = 0; i < blogPosts.length; i++) {
        const postFile = blogPosts[i];
        
        try {
            const response = await fetch(`posts/${postFile}`);
            if (!response.ok) {
                throw new Error(`Could not load ${postFile}`);
            }
            
            const markdown = await response.text();
            const html = parseMarkdown(markdown);
            
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';
            postElement.innerHTML = html;
            blogContainer.appendChild(postElement);
            
            // Add divider between posts (except after last post)
            if (i < blogPosts.length - 1) {
                const divider = document.createElement('hr');
                divider.className = 'post-divider';
                blogContainer.appendChild(divider);
            }
            
        } catch (error) {
            console.error('Error loading blog post:', error);
            blogContainer.innerHTML += `
                <div class="blog-post">
                    <p style="color: var(--error-color);">Error loading post: ${postFile}</p>
                </div>
            `;
        }
    }
}

// Simple markdown parser (handles basic formatting)
function parseMarkdown(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Code inline
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    
    // Wrap in paragraphs
    html = '<p>' + html + '</p>';
    
    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p><h/g, '<h');
    html = html.replace(/<\/h([1-6])><\/p>/g, '</h$1>');
    
    return html;
}

// Initialize blog posts on learning log page
if (document.getElementById('blog-posts')) {
    loadBlogPosts();
}

// ============================================
// WEEKLY HOURS TRACKER (MANUAL UPDATE)
// ============================================

// You can manually update this each week
// Format: { week: X, hours: Y }
const currentWeekData = {
    week: 1,
    hours: 0, // Update this as you log hours
    target: 10
};

function updateWeeklyHours() {
    const hoursElement = document.getElementById('hours-week');
    if (hoursElement) {
        hoursElement.textContent = `${currentWeekData.hours}/${currentWeekData.target}`;
        
        // Add visual indicator if behind/on track/ahead
        if (currentWeekData.hours >= currentWeekData.target) {
            hoursElement.style.color = 'var(--accent-primary)';
        } else if (currentWeekData.hours >= currentWeekData.target * 0.7) {
            hoursElement.style.color = 'var(--warning-color)';
        } else {
            hoursElement.style.color = 'var(--error-color)';
        }
    }
}

updateWeeklyHours();

// ============================================
// COPY TO CLIPBOARD (FOR CODE BLOCKS)
// ============================================

document.querySelectorAll('pre code').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        cursor: pointer;
    `;
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.addEventListener('click', async () => {
        await navigator.clipboard.writeText(block.textContent);
        button.textContent = 'Copied!';
        button.style.color = 'var(--accent-primary)';
        setTimeout(() => {
            button.textContent = 'Copy';
            button.style.color = 'var(--text-secondary)';
        }, 2000);
    });
});

// ============================================
// CONSOLE MESSAGE (BECAUSE WHY NOT)
// ============================================

console.log('%cHey! 👋', 'font-size: 24px; font-weight: bold; color: #00ff88;');
console.log('%cIf you\'re checking the console, you might be interested in the code.', 'font-size: 14px; color: #a0a0a0;');
console.log('%cThis site is built without AI. Check out the source: https://github.com/toxictager', 'font-size: 14px; color: #a0a0a0;');
console.log('%c- Loui', 'font-size: 14px; color: #00ff88; font-style: italic;');