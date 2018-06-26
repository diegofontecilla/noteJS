'use strict';
(function () {
    let note = new NoteModel("My favourite language is javascript");
    assert.isTrue("The note has text", note.text() === "My favourite language is javascript");
})();

