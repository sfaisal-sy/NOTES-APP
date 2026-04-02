
// STATE VARIABLE
let idOfNoteToEdit = null;

// grab the user click
displayNote.addEventListener('click', (event) => {
    //grab the click btn
    if(event.target.classList.contains('edit-btn'));
    // grab the data-id from btn
    let getNoteid = Number(event.target.dataset.id);
   // find the matching object from the notesArray
    let getNoteObject = notesArray.find((noteObject) => noteObject.id === getNoteid);
   // populate the textarea with the existing note
    noteText.value = getNoteObject.note;
    noteText.focus();
    // change the addbtn UI
    addNoteBtn.textContent = 'EDIT - NOTE';
    addNoteBtn.classList.replace('btn-primary', 'btn-success');
    // CHANG THE STATE
    idOfNoteToEdit = getNoteid;
});

addNoteBtn.addEventListener('click', () => {
    // CHECK THE STATE
    if(idOfNoteToEdit === null) return;
    // Get the note from textarea
    let editText = noteText.value.trim();
    
    if(editText === '') {
        alert('NOTE CANNOT BE EMPTY');
        noteText.focus();
        return;
    }
    // Get the Object from notesArray to be edited
    let noteObject = notesArray.find((noteObject) => noteObject.id === idOfNoteToEdit)
    // Update the note in object
    noteObject.note = editText;
    // save to LS
    saveNotesArrayToLS();
    // DISPLAY ON SCREEN
    displayNotes();

    // CHANGE THE BTN UI
    idOfNoteToEdit = null;
    addNoteBtn.textContent = 'ADD - NOTE';
    addNoteBtn.classList.replace('btn-success', 'btn-primary');
    noteText.value = '';
    noteText.focus();
    
})