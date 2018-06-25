'use strict';
describe('Note', function () {
    let note;
    beforeEach(function () {
        note = new NoteModel("this is a test note");
    });

    it("Has a function to see text in it", function () {
        expect(note.text()).toEqual("this is a test note");
    });
});