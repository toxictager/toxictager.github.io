document.addEventListener('DOMContentLoaded', function() {
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
    
    // Sample notes data
    const notes = [
        {
            id: 1,
            title: 'My First Note',
            content: 'This is my first note in the app. I can write anything I want here and organize my thoughts.\n\nThe app allows me to:\n- Create new notes\n- Edit existing notes\n- Delete notes I no longer need\n- Organize notes by categories\n\nIt\'s a great way to keep track of ideas, to-do lists, and important information!',
            preview: 'This is my first note in the app...'
        },
        {
            id: 2,
            title: 'Ideas',
            content: '- Project ideas for the weekend\n- Blog post about Python\n- New features for the note app\n- Learn a new programming language',
            preview: '- Project ideas for the weekend...'
        },
        {
            id: 3,
            title: 'To-Do List',
            content: '[ ] Complete the website\n[ ] Debug the Python script\n[ ] Update portfolio\n[x] Create presentation slides',
            preview: '[ ] Complete the website...'
        }
    ];
    
    let currentNoteId = 1;
    
    // Set up note item click events
    noteItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove active class from all notes
            noteItems.forEach(note => note.classList.remove('active'));
            
            // Add active class to clicked note
            this.classList.add('active');
            
            // Update note editor with the selected note
            const noteId = index + 1;
            const note = notes.find(n => n.id === noteId);
            
            if (note) {
                titleInput.value = note.title;
                contentTextarea.value = note.content;
                currentNoteId = noteId;
            }
        });
    });
    
    // New Note button functionality
    if (newNoteBtn) {
        newNoteBtn.addEventListener('click', function() {
            // Create a new empty note
            titleInput.value = 'New Note';
            contentTextarea.value = '';
            
            // Display a message to the user
            alert('In the full application, this would create a new note. For this demo, you can edit the current note.');
        });
    }
    
    // Delete Note button functionality
    if (deleteNoteBtn) {
        deleteNoteBtn.addEventListener('click', function() {
            // Display a confirmation message
            const confirmDelete = confirm('Are you sure you want to delete this note?');
            
            if (confirmDelete) {
                alert('In the full application, this would delete the current note. For this demo, the note will remain.');
            }
        });
    }
    
    // Save Note button functionality
    if (saveNoteBtn) {
        saveNoteBtn.addEventListener('click', function() {
            // Get the current note values
            const title = titleInput.value;
            const content = contentTextarea.value;
            
            // Update the note in our data
            const noteIndex = notes.findIndex(n => n.id === currentNoteId);
            
            if (noteIndex !== -1) {
                notes[noteIndex].title = title;
                notes[noteIndex].content = content;
                
                // Update the preview in the sidebar
                const previewText = content.split('\n')[0].substring(0, 30) + '...';
                noteItems[noteIndex].querySelector('.note-item-title').textContent = title;
                noteItems[noteIndex].querySelector('.note-item-preview').textContent = previewText;
                
                // Show a success message
                alert('Note saved successfully!');
            }
        });
    }
});