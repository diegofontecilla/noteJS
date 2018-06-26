(function() {
    let noteList = new NoteListModel();
    let note = new NoteModel("This is a note");
    noteList.add("This is a note");
    noteList.add("This is a note");

    let noteListArray = JSON.stringify(noteList.view().map(note => note.text()));
    let twoNotesArray = JSON.stringify([note.text(), note.text()]);
    assert.isTrue("Two notes can be added and viewed",  noteListArray === twoNotesArray);
})();