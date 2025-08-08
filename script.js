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
    // ========= DYNAMIC MARKDOWN BLOG ENGINE ========== //
    // ================================================= //

    // PART 1: The list of your posts. This is the ONLY part you'll edit.
    const postFiles = [
        'my-first-post.md'
    ];

    // PART 2: Get the empty container from your HTML.
    const blogFeed = document.getElementById('blog-feed');

    // PART 3: The main function that fetches and displays the posts.
    async function loadPosts() {
        if (!blogFeed) return; // Stop if the container doesn't exist.

        for (const file of postFiles) {
            try {
                const response = await fetch(`posts/${file}`);
                if (!response.ok) throw new Error(`File not found: ${file}`);

                const markdownText = await response.text();
                const postHTML = marked.parse(markdownText);
                
                const postContainer = document.createElement('article');
                postContainer.className = 'blog-post';
                postContainer.innerHTML = postHTML;
                
                blogFeed.appendChild(postContainer);

                if (postFiles.indexOf(file) < postFiles.length - 1) {
                    const divider = document.createElement('hr');
                    divider.className = 'post-divider';
                    blogFeed.appendChild(divider);
                }
            } catch (error) {
                console.error('Error loading post:', error);
                if(blogFeed) blogFeed.innerHTML += `<p style="color: #ff5f56;">Error: Could not load post '${file}'. Make sure the file exists in the 'posts' folder and the filename is correct in script.js.</p>`;
            }
        }
    }

    // PART 4: Call the function to start the blog engine.
    loadPosts();

});