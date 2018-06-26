'use strict';
(function (exports) {
    function NoteListModel() {
        this._notes = [];
    }
    exports.NoteListModel = NoteListModel;
})(this);

// saves a note with the text given in the argument
NoteListModel.prototype.add = function (noteToAdd) {
    this._notes.push(new NoteModel(noteToAdd));
};

NoteListModel.prototype.view = function () {
    return this._notes;
};
