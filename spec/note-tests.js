'use strict';
(function () {
    let note = new NoteModel("My favourite language is javascript");
    console.log(note.text);
    assert.isTrue("The note has text", note.text() === "My favourite language is javascript");
})();
(function () {
    let note = new NoteModel("My favourite language is javascript");
    console.log(note.text);
    assert.isTrue("The note has text", note.text() === "My favourite language is javascript");
})();
