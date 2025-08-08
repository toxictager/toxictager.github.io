document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================== //
    // ========= ORIGINAL SITE FUNCTIONALITY ========= //
    // =============================================== //

    // Navigation toggle for mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Note App Demo Functionality
    const newNoteBtn = document.getElementById('new-note-btn');
    const deleteNoteBtn = document.getElementById('delete-note-btn');
    const saveNoteBtn = document.getElementById('save-note-btn');
    const titleInput = document.querySelector('.note-title-input');
    const contentTextarea = document.querySelector('.note-content');
    const noteItems = document.querySelectorAll('.note-item');
    
    const notes = [
        { id: 1, title: 'My First Note', content: 'This is my first note...', preview: 'This is my first note...' },
        { id: 2, title: 'Ideas', content: '- Project ideas...', preview: '- Project ideas...' },
        { id: 3, title: 'To-Do List', content: '[ ] Complete the website...', preview: '[ ] Complete the website...' }
    ];
    let currentNoteId = 1;

    if (noteItems.length > 0) {
        noteItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                noteItems.forEach(note => note.classList.remove('active'));
                this.classList.add('active');
                const noteId = index + 1;
                const note = notes.find(n => n.id === noteId);
                if (note) {
                    titleInput.value = note.title;
                    contentTextarea.value = note.content;
                    currentNoteId = noteId;
                }
            });
        });
    }
    
    if (newNoteBtn) {
        newNoteBtn.addEventListener('click', () => alert('This would create a new note in the full app.'));
    }
    
    if (deleteNoteBtn) {
        deleteNoteBtn.addEventListener('click', () => confirm('Are you sure?') && alert('This would delete the note in the full app.'));
    }
    
    if (saveNoteBtn) {
        saveNoteBtn.addEventListener('click', () => alert('Note saved! (Demo)'));
    }


    // ================================================= //
    // ===== EFFICIENT MARKDOWN BLOG (WORKS LOCALLY) ===== //
    // ================================================= //

    // PART 1: Your blog posts.
    // To add a new post, copy an entire post object and add it to the top of the list.
    const blogPosts = [
        // POST 1
        {
            content: `
# My First Post: The Journey Begins

**Published on: August 8, 2025**

![A person typing on a laptop with code on the screen.](https://images.unsplash.com/photo-1544256718-3b62ff584963?q=80&w=2070&auto=format&fit=crop)

Welcome to the first entry in my ethical hacking journal! I've created this blog to document everything I learn—from fundamental concepts and tool configurations to my experiences with Capture The Flag (CTF) challenges and personal projects.

### What I'm learning:
* Network scanning with Nmap
* Directory brute-forcing
* Subdomain enumeration

Here's an example of a code block:
\`\`\`bash
# Example of a simple nmap scan
nmap -sV --script=default 127.0.0.1
\`\`\`
            `
        },
        // To add a new post, copy the object above and paste it here. For example:
        /*
        {
            content: \`
# My Second Post

This is my next post. It's easy to add new content here.
            \`
        },
        */
        
    ];

    // PART 2: The code that builds the blog. (You don't need to edit this).
    const blogFeed = document.getElementById('blog-feed');

    if (blogFeed) {
        blogPosts.forEach(post => {
            // Convert the markdown string into HTML using the Marked.js library
            const postHTML = marked.parse(post.content);
            
            // Create a container for the post
            const postContainer = document.createElement('article');
            postContainer.className = 'blog-post';
            postContainer.innerHTML = postHTML;
            
            // Add the complete post to your webpage
            blogFeed.appendChild(postContainer);

            // Add a divider line between posts
            if (blogPosts.indexOf(post) < blogPosts.length - 1) {
                const divider = document.createElement('hr');
                divider.className = 'post-divider';
                blogFeed.appendChild(divider);
            }
        });
    }
});