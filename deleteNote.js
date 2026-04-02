

displayNote.addEventListener('click', (event) => {

    if(event.target.classList.contains('delete-btn')){

        let noteId = Number(event.target.dataset.id);

        const getConfirmation = confirm('SURE YOU WANT TO DELETE THIS NOTE ?' );
        if(!getConfirmation) return;

        notesArray = notesArray.filter(object => object.id !== noteId);

        saveNotesArrayToLS();
        displayNotes();

        noteText.value = '';
        addNoteBtn.textContent = 'Add-Note';
        addNoteBtn.classList.replace('btn-success', 'btn-primary');
        idOfNoteToEdit = null;
        noteText.focus();


        // console.log(idNote);
    }
})