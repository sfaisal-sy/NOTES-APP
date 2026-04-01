let noteText = document.getElementById("note-text");
let addNoteBtn = document.getElementById("note-btn");
let displayNote = document.getElementById("display-note");

let notesArray = [];


function getNotesArrayFromLS() {
    let arrayFromLS = JSON.parse(localStorage.getItem('notesArray')) || [] ;

    if (arrayFromLS.length  === 0) {
        displayNote.innerHTML = `
            <div class="col" >
                 <div class="border  h-100 p-3 custom-div text-center">
                    <p>NO NOTE EXIST </p>
                    
                </div>
            </div>
        `;
        return;
    }

    notesArray = arrayFromLS;
    displayNotes();
}
// getNotesArrayFromLS();

function saveNotesArrayToLS() {
    localStorage.setItem("notesArray", JSON.stringify(notesArray));
}
// saveNotesArrayToLS();

function displayNotes() {
    displayNote.innerHTML = "";

    notesArray.forEach((note) => {
        displayNote.innerHTML += `
               <div class="col" data-id = '${note.id}'>
                 <div class="border rounded-5  h-100 p-3 custom-div">
                    <p>Created : ${note.date}</p>
                    <p>${note.note}</p>
                </div>
                </div>
               
                <div class="row">
                    <div class="col m-3 custom-btn">
                        <button  class="btn btn-primary edit-btn"   data-id=${note.id}>EDIT-NOTE</button>
                        <button  class="btn btn-danger delete-btn"  data-id=${note.id}>DELETE-NOTE</button>
                    </div>  
                    <hr>                   
        `;
    });  
}
getNotesArrayFromLS()

addNoteBtn.addEventListener("click", () => {
    if (idOfNoteToEdit !== null) return; // TO CHANGE THE STATE
    
    let textValue = noteText.value.trim();

    if (textValue === "") {
        alert("ENTER NOTE");
        noteText.value = "";
        noteText.focus();
        return;
    }

    notesArray.unshift({
        id: Date.now(),
        note: textValue,
        date: new Date().toLocaleDateString(),
    });
    
    saveNotesArrayToLS();    
    displayNotes();

    noteText.value = "";
    noteText.focus();
});

// localStorage.removeItem('notesArray')