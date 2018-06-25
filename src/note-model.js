'use strict';
function NoteModel(note) {
    this._text = note;
}
NoteModel.prototype.text = function () {
    return this._text ;
};