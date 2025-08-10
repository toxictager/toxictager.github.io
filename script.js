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
    // ==== DYNAMIC BLOG ENGINE (LOADS FROM FOLDER) ==== //
    // ================================================= //

    // PART 1: A list of your post filenames.
    // To add a new post, create a new .md file in the 'posts' folder
    // and add its filename to the top of this list.
    const postFiles = [
        'my-second-post.md',
        'my-first-post.md'
        // 'my-second-post.md', // Example for your next post
    ];

    // PART 2: The code that builds the blog. (You don't need to edit this).
    const blogFeed = document.getElementById('blog-feed');

    async function loadPosts() {
        if (!blogFeed) return;

        for (const file of postFiles) {
            try {
                // Fetch the markdown file from the 'posts' directory
                const response = await fetch(`posts/${file}`);
                if (!response.ok) {
                    throw new Error(`Server could not find file at: posts/${file}`);
                }
                const markdownText = await response.text();
                
                // Convert the Markdown text to HTML using the marked() function
                const postHTML = marked.parse(markdownText);
                
                // Create a container for the post and add it to the feed
                const postContainer = document.createElement('article');
                postContainer.className = 'blog-post';
                postContainer.innerHTML = postHTML;
                
                blogFeed.appendChild(postContainer);

                // Add a divider after each post except the last one
                if (postFiles.indexOf(file) < postFiles.length - 1) {
                    const divider = document.createElement('hr');
                    divider.className = 'post-divider';
                    blogFeed.appendChild(divider);
                }

            } catch (error) {
                console.error('Error loading post:', error);
                if(blogFeed) blogFeed.innerHTML += `<p style="color: #ff5f56;">Error: Could not load post '${file}'. Make sure the file exists in the 'posts' folder and that you are on a server.</p>`;
            }
        }
    }

    loadPosts();
});