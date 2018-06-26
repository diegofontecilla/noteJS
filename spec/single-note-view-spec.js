(function(){
    let note = new NoteModel("test");
    let noteview = new SingleNoteView(note);
    let expectedText = "<div>test</div>";
    assert.isTrue("The noteview can turn a note into a view", noteview.text() === expectedText);
})();